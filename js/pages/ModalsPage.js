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
      open: false,
    };
  }

  toggleModal() {
    return () => {
      this.setState({ open: !this.state.open });
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
            styleName="raised primary"
            text="Open"
            onPress={this.toggleModal()}
          />
        </View>

        <Modal
          title="Dope Modal"
          visible={this.state.open}
          secondaryTitle="CANCEL"
          secondaryAction={this.toggleModal(1)}
          primaryTitle="DONE"
          primaryAction={this.toggleModal(1)}
        >
          <View style={{ padding: 16 }}>
            <Text>This is a dope modal!</Text>
            <Text>Put whatever you want in here</Text>
            <Button
              styleName="raised accent"
              text="Close"
              onPress={this.toggleModal()}
            />
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
