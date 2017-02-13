import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Button,
  Page,
  Picker,
  Modal,
  StyleSheet,
  Text,
  TopTabs,
} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

class TopTabsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  getPage(id) {
    return (
      <View
        tabLabel={`Tab #${id}`}
        style={{ padding: 16 }}
      >
        <Text size="Title">
          Tab {id}
        </Text>
      </View>
    );
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;

    return (
      <Page
        navBar={{
          title: 'Top Tabs',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <TopTabs>
          {this.getPage(1)}
          {this.getPage(2)}
          {this.getPage(3)}
        </TopTabs>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(TopTabsPage);
