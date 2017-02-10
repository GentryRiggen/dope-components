import React from 'react';
import {
  StatusBar,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from './Icon';
import Text from './Text';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

class NavBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    onBackButtonPress: React.PropTypes.any,
    rightTitle: React.PropTypes.any,
    rightPress: React.PropTypes.any,
    rightDisabled: React.PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    onBackButtonPress: false,
    rightTitle: false,
    rightPress: false,
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
            name='md-arrow-back'
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
      rightTitle,
      rightPress,
      rightDisabled,
    } = this.props;
    if (rightTitle) {
      let text = rightTitle || '';
      let onPress = rightPress || (() => null);
      let textType = rightDisabled ? 'disabled' : 'regular';

      return (
        <TouchableHighlight
          onPress={onPress}
          underlayColor="transparent"
          disabled={rightDisabled}
          style={[styles.headerTouchable, styles.right]}
        >
          <Text
            size="Body"
            type={textType}
            inverse
          >
            {text}
          </Text>
        </TouchableHighlight>
      );
    }

    return null;
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

export default NavBar;