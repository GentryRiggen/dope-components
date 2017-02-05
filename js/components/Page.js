import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableHighlight,
  View,
} from 'react-native';
import NavBar from './NavBar';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

class Page extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    navBar: React.PropTypes.shape({
      title: React.PropTypes.string,
      onBackButtonPress: React.PropTypes.any,
      rightTitle: React.PropTypes.string,
      rightPress: React.PropTypes.func,
      rightDisabled: React.PropTypes.bool,
    }),
    scrollable: React.PropTypes.bool,
    statusBarStyle: React.PropTypes.oneOf(['default', 'light-content', 'dark-content'])
  };

  static defaultProps = {
    navBar: false,
    scrollable: false,
    statusBarStyle: 'light-content',
  };

  renderHeader() {
    if (this.props.navBar) {
      return <NavBar {...this.props.navBar} />
    }
  }

  renderContent() {
    const {
      children,
      scrollable,
    } = this.props;

    if (scrollable) {
      return (
        <ScrollView contentContainerStyle={[
            styles.content,
            styles.scrollableContent,
          ]}
        >
          {children}
        </ScrollView>
      );
    }

    return children;
  }

  render() {
    const { statusBarStyle } = this.props;
    StatusBar.setBarStyle(statusBarStyle, false);

    return (
      <View
        theme={theme}
        style={styles.container}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scrollableContent: {
    paddingBottom: theme.tabBarHeight,
  },
});

export default Page;