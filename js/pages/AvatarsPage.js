import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Avatar,
  Page,
  StyleSheet,
  Text,
} from '../components';

class AvatarsPage extends React.Component {
  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    return (
      <Page
        navBar={{
          title: 'Avatars',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View style={styles.container}>
          <Avatar
            kind="person"
            styleName="big"
            name="gentry ryan riggen"
          />
          <Avatar
            kind="person"
            styleName="normal"
            name="gentry ryan riggen"
          />
          <Avatar
            kind="person"
            styleName="small"
            name="gentry ryan riggen"
          />
        </View>

        <View style={styles.container}>
          <Avatar
            kind="person"
            styleName="big"
            name="gentry ryan riggen"
            image="https://unsplash.it/1920/1080/?random"
          />
          <Avatar
            kind="person"
            styleName="normal"
            name="gentry ryan riggen"
            image="https://unsplash.it/1920/1080/?random"
          />
          <Avatar
            kind="person"
            styleName="small"
            name="Gentry Ryan Riggen"
            image="https://unsplash.it/1920/1080/?random"
          />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(AvatarsPage);
