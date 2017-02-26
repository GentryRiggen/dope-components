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
} from 'dope-components';

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
      scrollable: false,
    };
  }

  toggleScrollable() {
    return () => this.setState({ scrollable: !this.state.scrollable });
  }

  getPage(id) {
    return (
      <View
        tabLabel={`Tab #${id}`}
        style={{ padding: 16 }}
        key={id}
      >
        <Text size="Title">
          Tab {id}
        </Text>
        <Button
          onPress={this.toggleScrollable()}
          text="Toggle Scrollable"
        />
      </View>
    );
  }

  getArray(size) {
    const arr = [];
    for (let i = 1; i <= (new Array(size)).length; i++) {
      arr.push(i);
    }

    return arr;
  }

  renderTabs(scrollable, count) {
    const pages = this.getArray(count).map(i => this.getPage(i));
    return (
      <TopTabs
        scrollable={scrollable}
      >
        {pages}
      </TopTabs>
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
        {this.state.scrollable ? this.renderTabs(true, 15) : this.renderTabs(false, 3)}
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
