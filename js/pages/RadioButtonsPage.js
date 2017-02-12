import React from 'react';
import { connect } from 'react-redux';
import { navigateBack } from '../ducks/navigationReducer';
import {
  List,
  Page,
  RadioButton,
} from '../components';

class RadioButtonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  itemSelected(selected) {
    return () => {
      this.setState({ selected });
    };
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(id => ({
      headerText: `Radio Button ${id}`,
      secondaryText: 'If you select this radio button it will become the only selected item.',
      secondaryLines: 2,
      onPress: this.itemSelected(id),
      divider: true,
      rightContent: (
        <RadioButton
          checked={this.state.selected === id}
          onPress={this.itemSelected(id)}
        />
      ),
    }));

    return (
      <Page
        navBar={{
          title: 'Radio Buttons',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <List dataSource={items}/>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(RadioButtonsPage);
