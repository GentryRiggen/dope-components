import React from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Icon,
  Title,
} from 'native-base';
import theme from '../common/theme';
import StyleSheet from '../common/StyleSheet';
import AlertBanner from '../elements/AlertBanner';
import { actions } from 'react-native-navigation-redux-helpers';

const {
  popRoute,
} = actions;

class Page extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    dispatch: React.PropTypes.func.isRequired,

    backButton: React.PropTypes.bool,
    hasFooter: React.PropTypes.bool,

    navigation: React.PropTypes.object.isRequired,

    navTitle: React.PropTypes.string,
    rightType: React.PropTypes.oneOf(['button', 'menu']),
    rightTitle: React.PropTypes.string,
    rightPress: React.PropTypes.func,
    rightDisabled: React.PropTypes.bool,

    showAlert: React.PropTypes.bool,
    alertMessage: React.PropTypes.string,
    alertType: React.PropTypes.string,
    alertTimeout: React.PropTypes.number,
  };

  static defaultProps = {
    rightDisabled: false,
    showAlert: false,
    alertMessage: '',
    alertType: 'success',
    hasFooter: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
    };
  }

  navigateBack() {
    return () => {
      const {
        navigation,
        dispatch,
      } = this.props;
      dispatch(popRoute(navigation.key));
    };
  }

  getLeftHeader() {
    const {
      backButton
    } = this.props;
    let onPress = () => null;
    let text = '';
    if (backButton) {
      text = (
        <Icon
          name='md-arrow-back'
          style={styles.headerBackButton}
        />
      );
      onPress = this.navigateBack();
    }
    return (
      <Button
        transparent
        onPress={onPress}
      >
        {text}
      </Button>
    );
  }

  getRightHeader() {
    const {
      rightType,
      rightTitle,
      rightPress,
      rightDisabled,
    } = this.props;
    let text = rightTitle || '';
    let onPress = rightPress || (() => null);
    let buttonTextStyle = styles.headerButtonText;
    if (rightDisabled) {
      buttonTextStyle = styles.headerButtonTextDisabled;
    }

    return (
      <Button
        transparent
        onPress={onPress}
        textStyle={buttonTextStyle}
        disabled={rightDisabled}
      >
        {text}
      </Button>
    );
  }

  renderHeader() {
    const { navTitle } = this.props;
    if (navTitle) {
      return (
        <Header
          style={{ backgroundColor: theme.grey900 }}
        >
          {this.getLeftHeader()}

          <Title
            style={styles.headerTitle}
          >
            {navTitle}
          </Title>

          {this.getRightHeader()}
        </Header>
      );
    }
  }

  renderAlert() {
    const {
      showAlert,
      alertMessage,
      alertType,
      alertTimeout,
    } = this.props;
    if (showAlert) {
      return (
        <AlertBanner
          open={showAlert}
          message={alertMessage}
          type={alertType}
          autoHideDuration={alertTimeout}
        />
      );
    }

    return null;
  }

  render() {
    const {
      children,
      hasFooter,
    } = this.props;
    const contentStyle = hasFooter ? styles.footerContent : styles.content;
    StatusBar.setBarStyle('light-content', false);
    return (
      <Container
        theme={theme}
        style={styles.container}
      >
        {this.renderHeader()}
        <Content
          style={contentStyle}
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps
        >
          {this.renderAlert()}
          {children}
        </Content>
      </Container>
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

export default connect()(Page);