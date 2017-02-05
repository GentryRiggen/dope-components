import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import List from '../components/List';
import Avatar from '../native-components/elements/Avatar';

import {
  Page,
  StyleSheet,
} from '../components';

class ListItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    const lotsOText = 'Bro! What\'s up?!? Long time no see. How\'s life? Still lifting and getting dem gainz? Yeah me to. Gainz for life. [FIST BUMP]';
    let a = [];
    for (let i = 0; i < 9999; ++i) a[i] = i;
    const items = a.map((i, index) => {
      const headerText = `List Item ${index}`;
      return {
        headerText,
        secondaryText: lotsOText,
        headerLines: 1,
        secondaryLines: 2,
        onPress: () => null,
        divider: true,
        leftContent: (
          <Avatar
            kind="person"
            name={headerText}
          />
        )
      };
    });

    this.setState({ items });
  }


  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    return (
      <Page
        navBar={{
          title: 'List Items',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <List
          dataSource={this.state.items}
          style={{marginBottom: 48}}
        />
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ListItemsPage);
