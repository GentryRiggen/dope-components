import React from 'react';
import { TouchableHighlight } from 'react-native';
import StyleSheet from '../common/StyleSheet';
import Text from '../typography/Text';
import theme from '../common/theme';

class Button extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf([
      'primary',
      'secondary'
    ]).isRequired,
    flat: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    fullWidth: React.PropTypes.bool,
    text: React.PropTypes.string,
    inverse: React.PropTypes.bool,
  };

  static defaultProps = {
    kind: 'primary',
    flat: false,
  };

  getBackgroundColor() {
    const {
      flat,
      kind,
      disabled,
    } = this.props;

    if (flat) {
      return theme.faintWhite;
    }
    else {
      if (disabled) {
        return theme.faintBlack
      }
      switch (kind) {
        case 'secondary':
          return theme.fullWhite;
        default:
          return theme.primary;
      }
    }
  }

  render() {
    let {
      disabled,
      onPress,
      text,
      flat,
      kind,
    } = this.props;
    text = (text || '').toUpperCase();
    onPress = (onPress && !disabled || (() => null));
    const primary = kind === 'primary';
    const raised = !flat;
    const inverse = raised && primary;
    if (inverse) {
      kind = inverse ? 'regular' : kind;
    } else if (disabled) {
      kind = 'disabled';
    }

    return (
      <TouchableHighlight
        {...this.props}
        style={[ styles.button, { backgroundColor: this.getBackgroundColor() }]}
        onPress={onPress}
        underlayColor={this.getBackgroundColor()}
      >
        <Text
          size="H5"
          type={kind}
          inverse={inverse}
        >
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    minWidth: 64,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {},
});

export default Button;