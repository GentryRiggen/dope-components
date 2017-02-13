import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Button,
  Page,
  Picker,
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

class PickersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  onItemSelected() {
    return (selected) => {
      this.setState({ selected });
    };
  }

  getItems() {
    const items = {};
    [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16].forEach(id => items[id] = { name: `Item ${id}` });
    return items;
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    return (
      <Page
        navBar={{
          title: 'Pickers',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View style={styles.container}>
          <Picker
            items={this.getItems()}
            selected={this.state.selected}
            onItemSelected={this.onItemSelected()}
          />
        </View>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(PickersPage);
