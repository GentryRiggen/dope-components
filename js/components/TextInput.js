import React from 'react';
import {
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

class TextInput extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onChangeText: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    multiline: React.PropTypes.bool,
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    multiline: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  setNativeProps(props) {
    this.refs['TEXT_INPUT_REF'].setNativeProps(props);
  }

  onFocus() {
    return () => this.setState({ focused: true });
  }

  onBlur() {
    return () => this.setState({ focused: false });
  }

  render() {
    const {
      disabled,
      multiline,
      placeholder,
      style,
      value,
    } = this.props;
    const borderStyle = this.state.focused ? styles.focusedBorder : styles.border;
    const height = multiline ? 80 : 40;

    return (
      <View style={[styles.container, { height }]}>
        <NativeTextInput
          ref="TEXT_INPUT_REF"
          style={[ styles.input, { height: height - 4 }, style ]}
          editable={!disabled}
          multiline={multiline}
          placeholder={placeholder}
          value={value}
          onFocus={this.onFocus()}
          onBlur={this.onBlur()}
          {...this.props}
        />

        <View style={borderStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  input: {
    fontFamily: theme.font.fontFamilyRegular,
    fontSize: theme.font.fontSizeBody,
  },
  border: {
    height: 1,
    backgroundColor: theme.colors.grey[300],
  },
  focusedBorder: {
    height: 2,
    backgroundColor: theme.colors.grey[600],
  },
});

export default TextInput;