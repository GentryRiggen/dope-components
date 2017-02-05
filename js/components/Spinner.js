import React from 'react';
import { ActivityIndicator } from 'react-native';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

class Spinner extends React.Component {
  render() {
    return (
    <ActivityIndicator
      style={[styles.centering, {height: 80}]}
      size="large"
      color={theme.colors.primaryColor}
    />
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default Spinner;