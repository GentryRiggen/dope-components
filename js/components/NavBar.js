import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Icon from './Icon';
import Text from './Text';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

const styles = StyleSheet.create({
  header: {
    minHeight: 64,
    paddingTop: 20,
    backgroundColor: theme.colors.navBarBackgroundColor,
    shadowColor: theme.colors.grey[500],
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    zIndex: 3,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerButton: {
    flex: 1,
  },
  headerTouchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 28,
    minWidth: 36,
  },
  left: {
    justifyContent: 'flex-start',
    paddingLeft: 12,
  },
  right: {
    justifyContent: 'flex-end',
    paddingRight: 12,
  },
  headerButtonText: {
    color: theme.colors.darkTextColor,
  },
  headerButtonTextDisabled: {
    color: theme.colors.disabledLightTextColor,
  },
});

const noOp = () => null;

class NavBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    onBackButtonPress: React.PropTypes.func,
    leftTitle: React.PropTypes.string,
    leftPress: React.PropTypes.func,
    rightType: React.PropTypes.oneOf(['button', 'menu']),
    rightIsPrimary: React.PropTypes.bool,
    rightMenuOptions: React.PropTypes.shape({
      options: React.PropTypes.array,
      cancelButtonIndex: React.PropTypes.number,
      destructiveButtonIndex: React.PropTypes.number,
    }),
    rightMenuItemPress: React.PropTypes.func,
    rightTitle: React.PropTypes.string,
    rightPress: React.PropTypes.func,
    rightDisabled: React.PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    onBackButtonPress: noOp,
    leftTitle: '',
    leftPress: noOp,
    rightType: 'button',
    rightIsPrimary: false,
    rightMenuOptions: {},
    rightMenuItemPress: noOp,
    rightTitle: '',
    rightPress: noOp,
    rightDisabled: false,
  };

  getLeftHeader() {
    const {
      leftTitle,
      leftPress,
      onBackButtonPress,
    } = this.props;
    const backButton = onBackButtonPress !== noOp;
    const content = backButton
      ? (
        <Icon
          name="md-arrow-back"
          size={24}
          type="regular"
        />
      ) : (
        <Text
          size="Body"
          type="regular"
          weight="Bold"
        >
          {leftTitle}
        </Text>
      );
    const onPress = backButton ? onBackButtonPress : leftPress;

    if (leftTitle || backButton) {
      return (
        <TouchableHighlight
          onPress={onPress}
          underlayColor="transparent"
          style={[styles.headerTouchable, styles.left]}
        >
          {content}
        </TouchableHighlight>
      );
    }

    return null;
  }

  getRightHeader() {
    const {
      rightType,
      rightTitle,
      rightPress,
      rightIsPrimary,
      rightDisabled,
      rightMenuOptions,
      rightMenuItemPress,
    } = this.props;
    const isButton = rightType === 'button';
    if (rightTitle || !isButton) {
      let textType = rightDisabled ? 'disabled' : 'regular';
      if (rightIsPrimary && !rightDisabled) {
        textType = 'primary';
      }
      const onPress = isButton ? rightPress : this.OnOpenActionSheet();
      const content = isButton
        ? (
          <Text
            size="Body"
            type={textType}
            weight="Bold"
          >
            {rightTitle}
          </Text>
        ) : (
          <View>
            <Icon
              name="md-more"
              size={28}
              type="regular"
              style={{
                paddingRight: 8,
              }}
            />
            <ActionSheet
              ref={r => this.ActionSheet = r}
              {...rightMenuOptions}
              onPress={rightMenuItemPress}
            />
          </View>
        );

      return (
        <TouchableHighlight
          onPress={onPress}
          underlayColor="transparent"
          disabled={rightDisabled}
          style={[styles.headerTouchable, styles.right]}
        >
          {content}
        </TouchableHighlight>
      );
    }

    return null;
  }

  OnOpenActionSheet() {
    return () => {
      this.ActionSheet.show();
    };
  }


  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerButton}>
            {this.getLeftHeader()}
          </View>

          <View style={styles.headerTitle}>
            <Text
              size="Title"
              type="regular"
              center
            >
              {this.props.title}
            </Text>
          </View>

          <View style={styles.headerButton}>
            {this.getRightHeader()}
          </View>
        </View>
      </View>
    );
  }
}

export default NavBar;