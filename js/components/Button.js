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
import { getColorFromType } from './lib/utils';

const buttonHeight = 48;
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

class Button extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    flat: React.PropTypes.bool,
    fullWidth: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    kind: React.PropTypes.oneOf([
      'primary',
      'secondary',
    ]).isRequired,
    onPress: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    flat: false,
    fullWidth: false,
    inverse: false,
    kind: 'primary',
    text: '',
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

  getBackgroundColor() {
    const {
      flat,
      kind,
      disabled,
    } = this.props;

    if (flat) {
      return 'transparent';
    }

    if (disabled) {
      return theme.colors.grey[700];
    }
    switch (kind) {
      case 'secondary':
        return theme.colors.grey[50];
      default:
        return theme.colors.primaryColor;
    }
  }

  getInverse() {
    const {
      inverse,
      flat,
      kind,
    } = this.props;
    let buttonInverse = inverse || (!flat && kind === 'primary');
    if (buttonInverse && !flat && kind === 'secondary') {
      buttonInverse = false;
    }

    return buttonInverse;
  }

  renderRippleView() {
    const {
      disabled,
      kind,
    } = this.props;
    if (disabled) {
      return null;
    }

    const { scaleValue, opacityValue } = this.state;
    const size = buttonHeight * 2;
    const buttonInverse = this.getInverse();
    const backgroundColor = getColorFromType(kind, buttonInverse);

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
          backgroundColor,
        }}
      />
    );
  }

  render() {
    const {
      disabled,
      kind,
      onPress,
      text,
    } = this.props;
    const buttonOnPress = disabled ? (() => null) : onPress;
    const primary = kind === 'primary';
    const buttonKind = disabled ? 'disabled' : kind;
    const buttonInverse = this.getInverse();

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressedIn}
        onPressOut={this.onPressedOut}
        onPress={buttonOnPress}
        underlayColor={this.getBackgroundColor()}
      >
        <View
          style={[
            styles.button,
            { backgroundColor: this.getBackgroundColor() },
          ]}>
          {this.renderRippleView()}
          <Text
            size="Body"
            type={buttonKind}
            weight="Bold"
            inverse={buttonInverse}
          >
            {text.toUpperCase()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Button;