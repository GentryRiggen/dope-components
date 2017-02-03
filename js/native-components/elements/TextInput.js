import React from 'react';
import { Input as NativeBaseInput } from 'native-base';
import StyleSheet from '../common/StyleSheet';

class TextInput extends React.Component {
  render() {
    return (
      <NativeBaseInput
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {

  },
});

export default TextInput;