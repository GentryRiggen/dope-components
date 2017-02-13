import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Button,
  Page,
  Modal,
  StyleSheet,
  Text,
} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

class ModalsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
    };
  }

  toggleModal(id) {
    return () => {
      this.setState({ [id]: !this.state[id] });
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
          title: 'Modals',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View style={styles.container}>
          <Button
            text="Open"
            onPress={this.toggleModal(1)}
          />
        </View>

        <Modal
          title="Dope Modal"
          visible={this.state[1]}
          secondaryTitle="CANCEL"
          secondaryAction={this.toggleModal(1)}
          primaryTitle="DONE"
          primaryAction={this.toggleModal(1)}
        >
          <View style={{ padding: 16 }}>
            <Text>This is a dope modal!</Text>
          </View>
        </Modal>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ModalsPage);
