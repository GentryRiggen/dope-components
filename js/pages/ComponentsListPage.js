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
          headerText: 'Buttons',
          headerLines: 1,
          secondaryText: 'Buttons... What more is there to say.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_BUTTON),
        },
        {
          headerText: 'Lists & List Items',
          headerLines: 1,
          secondaryText: 'Long lists and there default views.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_LIST_ITEM),
        },
        {
          headerText: 'Spinners',
          headerLines: 1,
          secondaryText: 'Activity indicators so the user doesn\'t think the app is stuck.',
          secondaryLines: 2,
          onPress: this.goToRoute(routes.ROUTE_SPINNERS),
        },
      ],
    })
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
          title: "Components",
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