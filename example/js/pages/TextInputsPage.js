import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Page,
  StyleSheet,
  TextInput,
  theme,
} from 'dope-components';

class TextInputsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
    };
  }

  renderTextInput(value, placeholder, multiline) {
    return (
      <TextInput
        value={this.state[value]}
        onChangeText={text => this.setState({ [value]: text })}
        placeholder={placeholder}
        multiline={multiline}
      />
    );
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    return (
      <Page
        navBar={{
          title: 'Text Inputs',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
        scrollable
      >
        <View style={styles.container}>
          <View>
            {this.renderTextInput('text1', 'Text Input', false)}
            {this.renderTextInput('text2', 'Text Area', true)}
            {this.renderTextInput('text3', 'Text Area', true)}
          </View>

          <View style={styles.bottom}>
            {this.renderTextInput('text4', 'Text Area Keyboard moves page', true)}
            {this.renderTextInput('text5', 'Text Area Keyboard moves page', true)}
            {this.renderTextInput('text6', 'Text Area Keyboard moves page', true)}
          </View>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  bottom: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(TextInputsPage);
