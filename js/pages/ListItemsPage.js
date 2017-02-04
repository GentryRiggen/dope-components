import React from 'react';
import { connect } from 'react-redux';
import { List } from 'native-base';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import ListItem from '../native-components/elements/ListItem';
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
    for (i = 0; i < 50; ++i) a[i] = i;
    const items = a.map((i, index) => {
      return {
        header: `List Item ${index}`,
        body: lotsOText,
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
        <List>
          {this.state.items.map((item, index) => (
            <ListItem
              key={index}
              headerText={item.header}
              secondaryText={item.body}
              secondaryLines={2}
              leftContent={(
                <Avatar
                  kind="person"
                  name={item.header}
                />
              )}
            />
          ))}
        </List>
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
