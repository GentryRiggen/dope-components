import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Page,
  Text,
} from '../components';

const options = ['Option 1', 'Option 2', 'Cancel'];
const MenuOptionsPage = ({ dispatch, navigation }) => (
  <Page
    navBar={{
      title: 'Menu',
      onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
      rightType: 'menu',
      rightMenuOptions: {
        options: ['Option 1', 'Option 2', 'Cancel'],
        cancelButtonIndex: 2,
        destructiveButtonIndex: 0,
      },
      rightMenuItemPress: index => alert(`Menu item ${options[index]} clicked!`),
    }}
  >
    <View>
      <Text>Press the menu on the right in the nav bar.</Text>
    </View>
  </Page>
);

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(MenuOptionsPage);
