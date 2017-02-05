import React from 'react';
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StyleSheet from './lib/StyleSheet';
import Text from './Text';
import theme from './lib/theme';

const buttonHeight = 48;

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

  constructor(props, context) {
    super(props, context);

    const maxOpacity = 0.12;

    this.state = {
      maxOpacity,
      scaleValue: new Animated.Value(0.01),
      opacityValue: new Animated.Value(maxOpacity),
    };

    this.renderRippleView = this.renderRippleView.bind(this);
    this.onPressedIn = this.onPressedIn.bind(this);
    this.onPressedOut = this.onPressedOut.bind(this);
  }

  onPressedIn() {
    Animated.timing(this.state.scaleValue, {
      toValue: buttonHeight,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
    }).start();
  }

  onPressedOut() {
    Animated.timing(this.state.opacityValue, {
      toValue: 0,
    }).start(() => {
      this.state.scaleValue.setValue(0.01);
      this.state.opacityValue.setValue(this.state.maxOpacity);
    });
  }

  renderRippleView() {
    const { scaleValue, opacityValue } = this.state;
    const size = buttonHeight * 2;

    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{ scale: scaleValue }],
          opacity: opacityValue,
          backgroundColor: theme.colors.grey900,
        }}
      />
    );
  }

  getBackgroundColor() {
    const {
      flat,
      kind,
      disabled,
    } = this.props;

    if (flat) {
      return theme.colors.grey50;
    }
    else {
      if (disabled) {
        return theme.colors.grey700;
      }
      switch (kind) {
        case 'secondary':
          return theme.colors.white;
        default:
          return theme.colors.primaryColor;
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
      <TouchableWithoutFeedback
        onPressIn={this.onPressedIn}
        onPressOut={this.onPressedOut}
        onPress={onPress}
        underlayColor={this.getBackgroundColor()}
      >
        <View
          style={[
            styles.button,
            { backgroundColor: this.getBackgroundColor() }
          ]}>
          {this.renderRippleView()}
          <Text
            size="Body"
            type={kind}
            weight="Bold"
            inverse={inverse}
          >
            {text.toUpperCase()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default Button;