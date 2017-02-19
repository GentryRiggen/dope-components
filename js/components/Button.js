import React from 'react';
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import AnimatedView from './AnimatedView';
import View from './View';
import Text from './Text';
import Constants from './lib/constants';
import { getColorFromType } from './lib/utils';

class Button extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    onPress: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    disabled: false,
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
  }

  onPressedIn() {
    return () => {
      Animated.timing(this.state.scaleValue, {
        toValue: 10,
        duration: 5000,
        easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      }).start();
    };
  }

  onPressedOut() {
    return () => {
      Animated.timing(this.state.opacityValue, {
        toValue: 0,
      }).start(() => {
        this.state.scaleValue.setValue(0.01);
        this.state.opacityValue.setValue(this.state.maxOpacity);
      });
    };
  }

  renderRippleView() {
    if (this.props.disabled) {
      return null;
    }

    const { scaleValue, opacityValue } = this.state;
    return (
      <AnimatedView
        style={{
          transform: [{ scale: scaleValue }],
          opacity: opacityValue,
        }}
      />
    );
  }

  render() {
    const {
      disabled,
      onPress,
      text,
      style,
    } = this.props;
    const buttonOnPress = disabled ? (() => null) : onPress;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressedIn()}
        onPressOut={this.onPressedOut()}
        onPress={buttonOnPress}
        underlayColor="transparent"
        styleName="dark"
        style={style}
      >
        <View style={style.container}>
          {this.renderRippleView()}
          <Text style={style.text}>
            {text.toUpperCase()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connectStyle(`${Constants.domain}.Button`)(Button);
