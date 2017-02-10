import React from 'react';
import {
  StatusBar,
  TouchableHighlight,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollableContent}
        >
          {children}
        </KeyboardAwareScrollView>
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
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: null,
    width: null,
    backgroundColor: theme.colors.white.full,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white.full,
  },
  scrollableContent: {
    backgroundColor: theme.colors.white.full,
  },
});

export default Page;