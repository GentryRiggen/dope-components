import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from './Icon';
import theme from './lib/theme';
import StyleSheet from './lib/StyleSheet';

const { checkboxSize } = theme.dimensions;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white.full,
    borderColor: theme.colors.primaryColor,
    borderWidth: 2,
    borderRadius: 3,
    width: checkboxSize,
    height: checkboxSize,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: theme.colors.primaryColor,
  },
});

const CheckBox = ({ checked, onPress }) => {
  const checkedContainer = checked
    ? (
      <Icon
        name="md-checkmark"
        size={20}
        type="regular"
        inverse
      />
    )
    : <View />;
  const style = checked ? [styles.container, styles.checked] : styles.container;

  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}
      underlayColor={theme.colors.primaryColor}
    >
      {checkedContainer}
    </TouchableHighlight>
  );
};

CheckBox.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

export default CheckBox;
