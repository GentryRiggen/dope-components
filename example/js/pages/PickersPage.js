import React from 'react';
import { connect } from 'react-redux';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Page,
  Picker,
} from 'dope-components';

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
    [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16]
      .forEach(id => items[id] = {
        headerText: `Item ${id}`,
      });
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
        <Picker
          items={this.getItems()}
          selected={this.state.selected}
          onItemSelected={this.onItemSelected()}
        />
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
