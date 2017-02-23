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
import AvatarsPage from './pages/AvatarsPage';
import BarChartsPage from './pages/BarChartsPage';
import ButtonsPage from './pages/ButtonsPage';
import CheckBoxesPage from './pages/CheckBoxesPage';
import ListItemsPage from './pages/ListItemsPage';
import MenuOptionsPage from './pages/MenuOptionsPage';
import ModalsPage from './pages/ModalsPage';
import PickersPage from './pages/PickersPage';
import PieChartsPage from './pages/PieChartsPage';
import RadioButtonsPage from './pages/RadioButtonsPage';
import SpinnersPage from './pages/SpinnersPage';
import TextInputsPage from './pages/TextInputsPage';
import TopTabsPage from './pages/TopTabsPage';
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
        case routes.ROUTE_AVATARS:
          page = <AvatarsPage />;
          break;
        case routes.ROUTE_BAR_CHART:
          page = <BarChartsPage />;
          break;
        case routes.ROUTE_BUTTON:
          page = <ButtonsPage />;
          break;
        case routes.ROUTE_CHECKBOXES:
          page = <CheckBoxesPage />;
          break;
        case routes.ROUTE_LIST_ITEM:
          page = <ListItemsPage />;
          break;
        case routes.ROUTE_MENU:
          page = <MenuOptionsPage />;
          break;
        case routes.ROUTE_MODALS:
          page = <ModalsPage />;
          break;
        case routes.ROUTE_PICKERS:
          page = <PickersPage />;
          break;
        case routes.ROUTE_PIE_CHART:
          page = <PieChartsPage />;
          break;
        case routes.ROUTE_RADIO_BUTTONS:
          page = <RadioButtonsPage />;
          break;
        case routes.ROUTE_SPINNERS:
          page = <SpinnersPage />;
          break;
        case routes.ROUTE_TEXT_INPUT:
          page = <TextInputsPage />;
          break;
        case routes.ROUTE_TOP_TABS:
          page = <TopTabsPage />;
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