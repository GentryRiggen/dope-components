import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Avatar,
  List,
  ListSwipeButton,
  Page,
  StyleSheet,
  theme,
} from '../components';

class ListItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      refreshing: false,
      fetchingMore: false,
    };
  }

  componentWillMount() {
    this.addToList(true, 0)();
  }

  addItems(reset) {
    return () => {
      const lotsOText = 'Bro! What\'s up?!? Long time no see. How\'s life? Still lifting and getting dem gainz? Yeah me to. Gainz for life. [FIST BUMP]';
      let a = [];
      const amount = Math.floor(Math.random() * 50) + 20;
      const swipeButtons = [
        { component: <ListSwipeButton text="Item 1" color={theme.colors.successColor} onPress={() => null} /> },
        { component: <ListSwipeButton text="Item 2" color={theme.colors.warningColor} onPress={() => null} /> },
        { component: <ListSwipeButton text="Item 3" color={theme.colors.errorColor} onPress={() => null} /> },
      ];
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
          ),
          leftSwipeButtons: swipeButtons,
          rightSwipeButtons: swipeButtons,
        };
      });

      this.setState({
        items: reset ? items : [...this.state.items, ...items],
        refreshing: false,
        fetchingMore: false,
      });
    };
  }

  addToList(reset, timeout = 1500) {
    return () => {
      if (this.state.refreshing || this.state.fetchingMore) {
        return;
      }
      if (reset) {
        this.setState({ refreshing: true });
      } else {
        this.setState({ fetchingMore: true });
      }
      setTimeout(this.addItems(reset), timeout);
    };
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    const title = `${this.state.items.length} List Items`;
    return (
      <Page
        navBar={{
          title,
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <List
          dataSource={this.state.items}
          onRefreshRequested={this.addToList(true)}
          isRefreshing={this.state.refreshing}
          onEndReached={this.addToList()}
          isFetchingMore={this.state.fetchingMore}
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
