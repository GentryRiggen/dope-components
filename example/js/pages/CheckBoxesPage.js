import React from 'react';
import { connect } from 'react-redux';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Checkbox,
  List,
  Page,
} from 'dope-components';

class CheckBoxesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
      },
    };
  }

  itemSelected(selected) {
    return () => {
      this.setState({
        items: {
          ...this.state.items,
          [selected]: !this.state.items[selected],
        },
      });
    };
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    const items = Object.keys(this.state.items).map(id => ({
      headerText: `Checkbox ${id}`,
      secondaryText: 'Check me! Check me! Check me!',
      secondaryLines: 2,
      onPress: this.itemSelected(id),
      divider: true,
      rightContent: (
        <Checkbox
          checked={this.state.items[id]}
          onPress={this.itemSelected(id)}
        />
      ),
    }));

    return (
      <Page
        navBar={{
          title: 'Checkboxes',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <List
          dataSource={items}
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

export default connect(mapStateToProps)(CheckBoxesPage);
