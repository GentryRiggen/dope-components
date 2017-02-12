import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import theme from './lib/theme';
import StyleSheet from './lib/StyleSheet';

const radioButtonSize = 28;
const innerButtonSize = radioButtonSize - 8;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white.full,
    borderColor: theme.colors.primaryColor,
    borderRadius: radioButtonSize / 2,
    borderWidth: 2,
    width: radioButtonSize,
    height: radioButtonSize,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerButton: {
    width: innerButtonSize,
    height: innerButtonSize,
    borderRadius: innerButtonSize / 2,
  },
  checked: {
    backgroundColor: theme.colors.primaryColor,
  },
  unChecked: {
    backgroundColor: theme.colors.white.full,
  },
});

const RadioButton = ({ checked, onPress }) => {
  const checkedContainer = checked
    ? <View style={[styles.innerButton, styles.checked]} />
    : <View style={[styles.innerButton, styles.unChecked]} />;

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor={theme.colors.primaryColor}
    >
      {checkedContainer}
    </TouchableHighlight>
  );
};

RadioButton.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

export default RadioButton;
