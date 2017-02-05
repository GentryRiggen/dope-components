import React from 'react';
import { connect } from 'react-redux';
import {
  List,
} from 'native-base';
import {
  ListItem,
  Page,
  StyleSheet,
} from '../components';
import { executeSaga } from '../ducks/saga';
import { navigateTo } from '../sagas/navigation';
import * as routes from '../ducks/allRoutes';

class ElementsListPage extends React.Component {
  static elements = [
    {
      name: 'Buttons',
      description: 'Buttons... What more is there to say.',
      route: routes.ROUTE_BUTTON,
    },
    {
      name: 'ListItem',
      description: 'The line representing something in a long list.',
      route: routes.ROUTE_LIST_ITEM,
    },
  ];

  goToRoute(route) {
    return () => {
      this.props.dispatch(executeSaga(navigateTo, this.props.componentsNavigation.key, route));
    };
  }

  render() {
    return (
      <Page
        navBar={{
          title: "Components",
        }}
      >
        <List>
          {ElementsListPage.elements.map((element, index) => (
            <ListItem
              key={index}
              onPress={this.goToRoute(element.route)}
              headerText={element.name}
              secondaryText={element.description}
              secondaryLines={2}
            />
          ))}
        </List>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {}
});

function mapStateToProps(state) {
  return {
    componentsNavigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ElementsListPage);
