import React from 'react';
import R from 'ramda';
import { Text as NativeText } from 'react-native';
import theme from './lib/theme';
import { getColorFromType } from './lib/utils';

class Text extends React.Component {
  static propTypes = {
    center: React.PropTypes.bool,
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
      center,
      inverse,
      size,
      type,
    } = this.props;
    const { font } = theme;
    const fontSize = R.propOr(theme.fontSizeH6, `fontSize${size}`, font);
    const lineHeight = R.propOr(theme.lineHeightH6, `fontHeight${size}`, font);
    const color = getColorFromType(type, inverse);
    const textAlign = center ? 'center' : 'auto';

    return {
      fontFamily: font.fontFamily,
      fontSize,
      lineHeight,
      color,
      textAlign,
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