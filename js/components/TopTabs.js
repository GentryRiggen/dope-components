import React from 'react';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Button from './Button';
import Text from './Text';

class TopTabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    initialPage: React.PropTypes.number,
    scrollable: React.PropTypes.bool,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    initialPage: 0,
    scrollable: false,
  };

  renderTab() {
    return (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
      const {
        scrollable,
        style,
      } = this.props;
      const tabStyle = scrollable ? style.scrollableTab : style.fixedTab;
      return (
        <Button
          key={`${name}_${page}`}
          onPress={() => onPressHandler(page)}
          onLayout={onLayoutHandler}
          style={tabStyle}
          noRipple
        >
          <Text
            size="Body"
            weight="Bold"
          >
            {name}
          </Text>
        </Button>
      );
    };
  }

  renderTabBar() {
    return () => {
      if (this.props.scrollable) {
        return (
          <ScrollableTabBar
            renderTab={this.renderTab()}
          />
        );
      }

      return (
        <DefaultTabBar
          renderTab={this.renderTab()}
        />
      );
    };
  }

  render() {
    const {
      children,
      initialPage,
      style,
    } = this.props;
    return (
      <ScrollableTabView
        initialPage={initialPage}
        renderTabBar={this.renderTabBar()}
        tabBarUnderlineStyle={style.tabBarUnderline}
        style={style.tabBar}
      >
        {children}
      </ScrollableTabView>
    );
  }
}

export default connectStyle(`${Constants.domain}.TopTabs`)(TopTabs);
