import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import StyleSheet from './lib/StyleSheet';
import Text from './Text';
import theme from './lib/theme';

class ListItem extends React.Component {
  static propTypes = {
    headerText: React.PropTypes.string.isRequired,
    headerLines: React.PropTypes.number,
    secondaryText: React.PropTypes.string,
    secondaryLines: React.PropTypes.number,
    onPress: React.PropTypes.func,
    divider: React.PropTypes.bool,
    leftContent: React.PropTypes.node,
  };

  static defaultProps = {
    headerLines: 1,
    secondaryLines: 1,
    divider: true,
  };

  getHeaderText() {
    const {
      headerText,
      headerLines,
    } = this.props;
    return (
      <Text
        size="Subheading"
        type="regular"
        numberOfLines={headerLines}
        ellipsizeMode="tail"
      >
        {headerText}
      </Text>
    );
  }

  getSecondaryText() {
    const {
      secondaryText,
      secondaryLines,
    } = this.props;
    let text = null;
    if (secondaryText) {
      text = (
        <Text
          size="Body"
          type="secondary"
          numberOfLines={secondaryLines}
          ellipsizeMode="tail"
        >
          {secondaryText}
        </Text>
      );
    }
    return (
      <View
        style={styles.textContent}
      >
        {text}
      </View>
    );
  }

  getDivider() {
    if (this.props.divider) {
      return <View style={styles.divider}/>
    }
  }

  renderLeft() {
    const { leftContent } = this.props;
    if (leftContent) {
      return (
        <View style={styles.leftContainer}>
          {leftContent}
        </View>
      );
    }
  }

  render() {
    let {
      onPress,
    } = this.props;
    onPress = (onPress || (() => null));

    return (
      <TouchableHighlight
        style={styles.listItem}
        onPress={onPress}
        underlayColor={theme.colors.grey200}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            {this.renderLeft()}
            <View style={styles.textContainer}>
              <View style={styles.headerTextContainer}>
                {this.getHeaderText()}
              </View>
              <View style={styles.secondaryTextContainer}>
                {this.getSecondaryText()}
              </View>
            </View>
          </View>
          {this.getDivider()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {},
  container: {
    paddingLeft: 16,
  },
  innerContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    width: 48,
    paddingRight: 8,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  headerTextContainer: {},
  secondaryTextContainer: {
    paddingTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.dividerDarkColor,
  },
});

export default ListItem;