import React from 'react';
import R from 'ramda';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import StyleSheet from './lib/StyleSheet';
import Text from './Text';
import theme from './lib/theme';

const sideContentWidth = 48;
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: theme.colors.white.full,
  },
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
    width: sideContentWidth,
    paddingRight: 8,
  },
  rightContainer: {
    width: sideContentWidth,
    paddingLeft: 8,
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

class ListItem extends React.Component {
  static propTypes = {
    headerText: React.PropTypes.string.isRequired,
    headerLines: React.PropTypes.number,
    secondaryText: React.PropTypes.string,
    secondaryLines: React.PropTypes.number,
    onPress: React.PropTypes.func,
    divider: React.PropTypes.bool,
    leftContent: React.PropTypes.node,
    leftSwipeButtons: React.PropTypes.array,
    rightSwipeButtons: React.PropTypes.array,
    rightContent: React.PropTypes.node,
  };

  static defaultProps = {
    headerLines: 1,
    secondaryText: '',
    secondaryLines: 1,
    onPress: () => null,
    divider: true,
    leftContent: null,
    leftSwipeButtons: [],
    rightSwipeButtons: [],
    rightContent: null,
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
      <View style={styles.textContent}>
        {text}
      </View>
    );
  }

  getDivider() {
    if (this.props.divider) {
      return <View style={styles.divider}/>;
    }

    return null;
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

    return null;
  }

  renderRight() {
    const { rightContent } = this.props;
    if (rightContent) {
      return (
        <View style={styles.rightContainer}>
          {rightContent}
        </View>
      );
    }

    return null;
  }

  render() {
    const {
      onPress,
      leftSwipeButtons,
      rightSwipeButtons,
    } = this.props;
    const content = (
      <TouchableHighlight
        {...this.props.sortHandlers}
        style={styles.listItem}
        onPress={onPress}
        underlayColor={theme.colors.grey[200]}
        delayLongPress={0}
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

            {this.renderRight()}
          </View>
          {this.getDivider()}
        </View>
      </TouchableHighlight>
    );

    if (!R.isEmpty(leftSwipeButtons) || !R.isEmpty(rightSwipeButtons)) {
      return (
        <Swipeout
          left={leftSwipeButtons}
          right={rightSwipeButtons}
        >
          {content}
        </Swipeout>
      );
    }

    return content;
  }
}

export default ListItem;
