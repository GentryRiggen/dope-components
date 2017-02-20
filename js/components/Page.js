import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import NavBar from './NavBar';

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
    style: React.PropTypes.any,
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
      style,
    } = this.props;

    if (scrollable) {
      return (
        <KeyboardAwareScrollView contentContainerStyle={style.scrollableContent}>
          {children}
        </KeyboardAwareScrollView>
      );
    }

    return children;
  }

  render() {
    const {
      statusBarStyle,
      style,
    } = this.props;
    StatusBar.setBarStyle(statusBarStyle, false);

    return (
      <View
        style={style.container}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

export default connectStyle(`${Constants.domain}.Page`)(Page);
