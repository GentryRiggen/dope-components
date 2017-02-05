import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Avatar,
  List,
} from '../components';
import {
  Page,
  StyleSheet,
} from '../components';

class ListItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      amount: 9999,
      refreshing: false,
    };
  }

  componentWillMount() {
    this.buildList(0)();
  }

  buildList(timeout = 3000) {
    return () => {
      this.setState({ refreshing: true });
      const self = this;
      setTimeout(() => {
        const lotsOText = 'Bro! What\'s up?!? Long time no see. How\'s life? Still lifting and getting dem gainz? Yeah me to. Gainz for life. [FIST BUMP]';
        let a = [];
        const amount = Math.floor(Math.random() * 9999);
        this.setState({ amount });
        for (let i = 0; i < amount; ++i) a[i] = i;
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

        self.setState({
          items,
          refreshing: false,
        });
      }, timeout);
    };
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    const title = `${this.state.amount} List Items`;
    return (
      <Page
        navBar={{
          title,
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <List
          dataSource={this.state.items}
          onRefreshRequested={this.buildList()}
          isRefreshing={this.state.refreshing}
        />
      </Page>
    );
  }
}

const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ListItemsPage);
