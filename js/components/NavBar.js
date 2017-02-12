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
    backgroundColor: theme.colors.blueGrey[900],
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
    color: theme.colors.white.full,
  },
  headerButtonTextDisabled: {
    color: theme.colors.disabledLightTextColor,
  },
});

const noop = () => null;

class NavBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    onBackButtonPress: React.PropTypes.any,
    rightType: React.PropTypes.oneOf(['button', 'menu']),
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
    onBackButtonPress: false,
    rightType: 'button',
    rightMenuOptions: {},
    rightMenuItemPress: noop,
    rightTitle: '',
    rightPress: noop,
    rightDisabled: false,
  };

  getLeftHeader() {
    if (this.props.onBackButtonPress) {
      return (
        <TouchableHighlight
          onPress={this.props.onBackButtonPress}
          underlayColor="transparent"
          style={[styles.headerTouchable, styles.left]}
        >
          <Icon
            name="md-arrow-back"
            size={24}
            type="regular"
            inverse
          />
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
      rightDisabled,
      rightMenuOptions,
      rightMenuItemPress,
    } = this.props;
    const isButton = rightType === 'button';
    if (rightTitle || !isButton) {
      const textType = rightDisabled ? 'disabled' : 'regular';
      const onPress = isButton ? rightPress : this.OnOpenActionSheet();
      const content = isButton
        ? (
          <Text
            size="Body"
            type={textType}
            inverse
          >
            {rightTitle}
          </Text>
        ) : (
          <View>
            <Icon
              name="md-more"
              size={24}
              type="regular"
              inverse
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
              inverse
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