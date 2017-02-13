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

class Page extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    navBar: React.PropTypes.shape({
      title: React.PropTypes.string,
      onBackButtonPress: React.PropTypes.any,
      rightType: React.PropTypes.oneOf(['button', 'menu']),
      rightMenuOptions: React.PropTypes.shape({
        options: React.PropTypes.array.isRequired,
        cancelButtonIndex: React.PropTypes.number.isRequired,
        destructiveButtonIndex: React.PropTypes.number.isRequired,
      }),
      rightMenuItemPress: React.PropTypes.func,
      rightTitle: React.PropTypes.string,
      rightPress: React.PropTypes.func,
      rightDisabled: React.PropTypes.bool,
    }),
    scrollable: React.PropTypes.bool,
    statusBarStyle: React.PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  };

  static defaultProps = {
    navBar: false,
    scrollable: false,
    statusBarStyle: 'dark-content',
  };

  renderHeader() {
    if (this.props.navBar) {
      return <NavBar {...this.props.navBar} />;
    }

    return null;
  }

  renderContent() {
    const {
      children,
      scrollable,
    } = this.props;

    if (scrollable) {
      return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollableContent}>
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

export default Page;