import React from 'react';
import { ActivityIndicator } from 'react-native';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

class Spinner extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf([
      'primary',
      'accent',
      'regular',
      'secondary',
    ]),
    inverse: React.PropTypes.bool,
  };

  static defaultProps = {
    type: 'primary',
    inverse: false,
  };

  render() {
    const {
      type,
      inverse,
    } = this.props;
    const { colors } = theme;
    let color;
    switch (type) {
      case 'accent':
        color = colors.accentColor;
        break;
      case 'regular':
        color = inverse ? colors.lightTextColor : colors.darkTextColor;
        break;
      case 'secondary':
        color = inverse ? colors.secondaryLightTextColor : colors.secondaryDarkTextColor;
        break;
      default:
        color = colors.primaryColor;
        break;
    }

    return (
      <ActivityIndicator
        style={styles.centering}
        size="large"
        color={color}
      />
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    padding: 8,
  },
});

export default Spinner;