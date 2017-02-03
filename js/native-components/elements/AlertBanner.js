import React from 'react';
import R from 'ramda';
import {
  Text,
  View,
} from 'native-base';
import theme from '../common/theme';
import StyleSheet from '../common/StyleSheet';

class AlertBanner extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
    message: React.PropTypes.string.isRequired,
    autoHideDuration: React.PropTypes.number,
    open: React.PropTypes.bool.isRequired,
    onRequestClose: React.PropTypes.func,
  };

  static defaultProps = {
    type: 'success',
    message: '',
    autoHideDuration: 5000,
    open: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    this.toggleBanner(this.props.open, this.props.autoHideDuration);
  }

  componentWillReceiveProps(nextProps) {
    this.toggleBanner(nextProps.open, nextProps.autoHideDuration);
  }

  toggleBanner(open, autoHideDuration) {
    if (this.state.open !== open) {
      this.setState({ open });
      if (open && autoHideDuration > 0) {
        const self = this;
        setTimeout(() => {
          if (self.refs.banner) {
            self.setState({ open: false });
          }
        }, autoHideDuration);
      }
    }
  }

  getBannerStyle() {
    let style = {};
    if (!this.state.open) {
      style = {
        ...style,
        height: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
      };
    }
    switch (this.props.type) {
      case 'error':
        style = {
          ...style,
          backgroundColor: theme.brandDanger,
        };
        break;
      default:
        style = {
          ...style,
          backgroundColor: theme.brandSuccess,
        };
        break;
    }

    return [
      styles.banner,
      style,
    ];
  }

  render() {
    const message = this.state.open ? this.props.message : '';
    return (
      <View
        ref="banner"
        style={this.getBannerStyle()}
      >
        <Text
          style={styles.message}
        >
          {message}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
  },
  message: {
    color: '#FFFFFF',
  },
});

export default AlertBanner;