import React from 'react';
import {
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
    statusBarStyle: React.PropTypes.oneOf(['default', 'light-content', 'dark-content'])
  };

  static defaultProps = {
    navBar: false,
    statusBarStyle: 'light-content',
  };

  renderHeader() {
    if (this.props.navBar) {
      return <NavBar {...this.props.navBar} />
    }
  }

  render() {
    const {
      children,
      statusBarStyle,
    } = this.props;
    StatusBar.setBarStyle(statusBarStyle, false);
    return (
      <View
        theme={theme}
        style={styles.container}
      >
        {this.renderHeader()}
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.grey200,
  },
  content: {
    backgroundColor: '#FFF',
  },
  footerContent: {
    backgroundColor: '#FFF',
    marginBottom: 48,
  },
  headerBackButton: {
    color: '#FFF',
  },
  headerTitle: {
    color: '#FFF',
  },
  headerButtonText: {
    color: theme.brandPrimary,
  },
  headerButtonTextDisabled: {
    color: '#888888',
  },
  bannerContainer: {
    marginTop: 164,
  },
});

export default Page;