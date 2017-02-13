import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import StyleSheet from './lib/StyleSheet';
import Text from './Text';
import theme from './lib/theme';

const styles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: theme.colors.primaryColor,
  },
  fixedTab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.tabBarBackgroundColor,
  },
  scrollableTab: {
    minWidth: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.tabBarBackgroundColor,
  },
});

class TopTabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    initialPage: React.PropTypes.number,
    scrollable: React.PropTypes.bool,
  };

  static defaultProps = {
    initialPage: 0,
    scrollable: false,
  };

  renderTab() {
    return (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
      const style = this.props.scrollable ? styles.scrollableTab : styles.fixedTab;
      return (
        <TouchableHighlight
          key={`${name}_${page}`}
          onPress={() => onPressHandler(page)}
          onLayout={onLayoutHandler}
          style={style}
          underlayColor={theme.colors.tabBarBackgroundColor}
        >
          <Text
            size="Body"
            weight="Bold"
          >
            {name}
          </Text>
        </TouchableHighlight>
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
    } = this.props;
    return (
      <ScrollableTabView
        initialPage={initialPage}
        renderTabBar={this.renderTabBar()}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarBackgroundColor={theme.colors.tabBarBackgroundColor}
      >
        {children}
      </ScrollableTabView>
    );
  }
}

export default TopTabs;
