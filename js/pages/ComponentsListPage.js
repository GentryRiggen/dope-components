import React from 'react';
import { connect } from 'react-redux';
import {
  List,
  Page,
} from '../components';
import { executeSaga } from '../ducks/saga';
import { navigateTo } from '../sagas/navigation';
import * as routes from '../ducks/routes';

class ComponentsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
    };
  }

  componentWillMount() {
    this.setState({
      components: [
        {
          headerText: 'Avatars',
          headerLines: 1,
          secondaryText: 'An icon representing something. People, etc. Initials for people when no image is available.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_AVATARS),
        },
        {
          headerText: 'Buttons',
          headerLines: 1,
          secondaryText: 'Buttons... What more is there to say.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_BUTTON),
        },
        {
          headerText: 'Checkboxes',
          headerLines: 1,
          secondaryText: 'Checkboxes let a user select many of a limited number of choices.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_CHECKBOXES),
        },
        {
          headerText: 'Lists & List Items',
          headerLines: 1,
          secondaryText: 'Lists with pull to refresh and infinite scroll. Also showing off list items.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_LIST_ITEM),
        },
        {
          headerText: 'Menu',
          headerLines: 1,
          secondaryText: 'Showing a menu of items hidden until invoked.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_MENU),
        },
        {
          headerText: 'Modals',
          headerLines: 1,
          secondaryText: 'Views that popover the content often asking for more information.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_MODALS),
        },
        {
          headerText: 'Pickers',
          headerLines: 1,
          secondaryText: 'It\'s like a select list in html. Maybe it should be called that... meh.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_PICKERS),
        },
        {
          headerText: 'Radio Buttons',
          headerLines: 1,
          secondaryText: 'Radio buttons let a user select ONE of a limited number of choices.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_RADIO_BUTTONS),
        },
        {
          headerText: 'Spinners',
          headerLines: 1,
          secondaryText: 'Activity indicators so the user doesn\'t think the app is stuck.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_SPINNERS),
        },
        {
          headerText: 'Text Inputs',
          headerLines: 1,
          secondaryText: 'Text inputs. Single line, TextAreas etc.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_TEXT_INPUT),
        },
        {
          headerText: 'Top Tabs',
          headerLines: 1,
          secondaryText: 'Tabs on the top of the page like a web browser.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_TOP_TABS),
        },
      ],
    });
  }


  goToRoute(route) {
    return () => {
      this.props.dispatch(executeSaga(navigateTo, this.props.componentsNavigation.key, route));
    };
  }

  render() {
    return (
      <Page
        navBar={{
          title: 'Components',
        }}
      >
        <List
          dataSource={this.state.components}
        />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentsNavigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ComponentsListPage);
