import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Page,
  StyleSheet,
  TextInput,
  theme,
} from '../components';

class TextInputsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: '',
      text2: '',
    };
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
      >
        <View style={styles.container}>
          <TextInput
            value={this.state.text1}
            onChangeText={(text1) => this.setState({ text1 })}
            placeholder="TextInput"
          />

          <TextInput
            value={this.state.text2}
            onChangeText={(text2) => this.setState({ text2 })}
            placeholder="TextArea"
            multiline
          />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(TextInputsPage);
