import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import StyleSheet from '../common/StyleSheet';
import Text from '../typography/Text';
import theme from '../common/theme';
import Avatar from '../elements/Avatar';

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
          size="H4"
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
          size="H6"
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
        underlayColor={theme.grey200}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            {this.renderLeft()}
            <View style={styles.textContainer}>
              {this.getHeaderText()}
              {this.getSecondaryText()}
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
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
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
  divider: {
    height: 1,
    backgroundColor: theme.grey200,
  },
});

export default ListItem;