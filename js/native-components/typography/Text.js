import React from 'react';
import R from 'ramda';
import { Text as NativeText } from 'react-native';
import theme from '../common/theme';

class Text extends React.Component {
  static propTypes = {
    size: React.PropTypes.oneOf([
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
      'H7',
    ]),
    inverse: React.PropTypes.bool,
    type: React.PropTypes.oneOf([
      'regular',
      'secondary',
      'disabled',
      'error',
      'success',
      'primary',
    ]),
  };

  static defaultProps = {
    size: 'H6',
    type: 'regular',
  };

  setNativeProps(props) {
    this.refs['TEXT_REF'].setNativeProps(props);
  }


  getStyles() {
    const {
      size,
      type,
      inverse,
    } = this.props;
    const fontSize = R.propOr(theme.fontSizeH6, `fontSize${size}`, theme);
    const lineHeight = R.propOr(theme.lineHeightH6, `lineHeight${size}`, theme);
    const fontWeight = R.propOr(theme.lineHeightH6, `fontWeight${size}`, theme);
    let color;
    switch (type) {
      case 'regular':
        color = inverse ? theme.fullWhite : theme.fullBlack;
        break;
      case 'secondary':
        color = inverse ? theme.lightWhite : theme.lightBlack;
        break;
      case 'disabled':
        color = inverse ? theme.minWhite : theme.minBlack;
        break;
      case 'error':
        color = theme.error;
        break;
      case 'success':
        color = theme.success;
        break;
      case 'primary':
        color = theme.primary;
        break;
    }

    return {
      fontSize,
      fontWeight,
      lineHeight,
      color,
    };
  }

  render() {
    return (
      <NativeText
        ref="TEXT_REF"
        style={[ this.getStyles(), this.props.style, ]}
        {...this.props}
      >
        {this.props.children}
      </NativeText>
    );
  }
}

export default Text;