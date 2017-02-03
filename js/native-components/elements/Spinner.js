import React from 'react';
import { Spinner as NativeBaseSpinner } from 'native-base';
import StyleSheet from '../common/StyleSheet';
import theme from '../common/theme';

class Spinner extends React.Component {
  static propTypes = {};

  render() {
    return (
      <NativeBaseSpinner
        color={theme.brandPrimary}
      />
    );
  }
}

const styles = StyleSheet.create({
});

export default Spinner;