import React from 'react';
import R from 'ramda';
import { Text as NativeText } from 'react-native';
import theme from './theme';

class Text extends React.Component {
  static propTypes = {
    inverse: React.PropTypes.bool,
    size: React.PropTypes.oneOf([
      'Title',
      'Subheading',
      'Body',
    ]),
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
    size: 'Body',
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
    const {
      colors,
      font,
    } = theme;
    const fontSize = R.propOr(theme.fontSizeH6, `fontSize${size}`, font);
    const lineHeight = R.propOr(theme.lineHeightH6, `fontHeight${size}`, font);
    let color;
    switch (type) {
      case 'regular':
        color = inverse ? colors.lightTextColor : colors.darkTextColor;
        break;
      case 'secondary':
        color = inverse ? colors.secondaryLightTextColor : colors.secondaryDarkTextColor;
        break;
      case 'disabled':
        color = inverse ? colors.disabledLightTextColor : colors.disabledDarkTextColor;
        break;
      case 'error':
        color = colors.errorColor;
        break;
      case 'success':
        color = colors.successColor;
        break;
      case 'primary':
        color = colors.primaryColor;
        break;
    }

    return {
      fontSize,
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