import React from 'react';
import {
  BackAndroid,
  Dimensions,
  NavigationExperimental,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import ComponentsListPage from './pages/ComponentsListPage';
import ButtonsPage from './pages/ButtonsPage';
import ListItemsPage from './pages/ListItemsPage';
import SpinnersPage from './pages/SpinnersPage';
import * as routes from './ducks/routes';

const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class Navigator extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onNavigateBack());
  }

  onNavigateBack() {
    return () => {
      const navigation = this.props.navigation;
      const rootRoute = navigation.routes[navigation.routes.length - 1].key;

      if (rootRoute === navigation.key) {
        return false;
      }

      this.props.dispatch(popRoute(this.props.navigation.key));
      return true;
    };
  }

  renderScene() {
    return (props) => {
      let page;
      switch (props.scene.route.key) {
        case routes.ROUTE_COMPONENTS_HOME:
          page = <ComponentsListPage />;
          break;
        case routes.ROUTE_BUTTON:
          page = <ButtonsPage />;
          break;
        case routes.ROUTE_LIST_ITEM:
          page = <ListItemsPage />;
          break;
        case routes.ROUTE_SPINNERS:
          page = <SpinnersPage />;
          break;
        default:
          page = <ComponentsListPage />;
          break;
      }

      return page;
    };
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        onNavigateBack={this.onNavigateBack()}
        renderScene={this.renderScene()}
      />
    );
  }
}

export default connect()(Navigator);