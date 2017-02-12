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
    weight: React.PropTypes.oneOf([
      'Bold',
      'Regular',
      'Light',
    ]),
  };

  static defaultProps = {
    size: 'Body',
    type: 'regular',
    weight: 'Regular',
  };

  setNativeProps(props) {
    this.refs.TEXT_REF.setNativeProps(props);
  }

  getStyles() {
    const {
      center,
      inverse,
      size,
      type,
      weight,
    } = this.props;
    const { font } = theme;
    const fontFamily = R.propOr(font.fontFamilyRegular, `fontFamily${weight}`, font);
    const fontSize = R.propOr(font.fontSizeBody, `fontSize${size}`, font);
    const lineHeight = R.propOr(font.fontSizeBody, `fontHeight${size}`, font);
    const color = getColorFromType(type, inverse);
    const textAlign = center ? 'center' : 'auto';

    return {
      fontFamily,
      fontSize,
      lineHeight,
      color,
      textAlign,
      backgroundColor: 'transparent',
    };
  }

  render() {
    return (
      <NativeText
        ref="TEXT_REF"
        style={[ this.getStyles(), this.props.style ]}
        {...this.props}
      >
        {this.props.children}
      </NativeText>
    );
  }
}

export default Text;
