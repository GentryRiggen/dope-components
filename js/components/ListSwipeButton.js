import React from 'react';
import { TouchableHighlight } from 'react-native';
import StyleSheet from './lib/StyleSheet';
import Text from './Text';

const styles = StyleSheet.create({
  swipeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwipeButton = ({ text, color, onPress }) => (
  <TouchableHighlight
    style={[
      styles.swipeButton,
      {
        backgroundColor: color,
      },
    ]}
    underlayColor={color}
    onPress={onPress}
  >
    <Text
      type="regular"
      inverse
      weight="Bold"
    >
      {text}
    </Text>
  </TouchableHighlight>
);
SwipeButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

export default SwipeButton;
