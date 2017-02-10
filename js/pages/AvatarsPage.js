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
          <View style={styles.item}>
            <Avatar
              kind="person"
              size="small"
              name="gentry ryan riggen"
            />
            <Text style={styles.text}>Gentry Ryan Riggen</Text>
          </View>

          <View style={styles.item}>
            <Avatar
              kind="person"
              size="small"
              name="Gentry Ryan Riggen"
              image="https://unsplash.it/100/100/?random"
            />
            <Text style={styles.text}>Gentry Ryan Riggen</Text>
          </View>

          <View style={styles.item}>
            <Avatar
              kind="person"
              size="large"
              name="gentry ryan riggen"
            />
            <Text style={styles.text}>Gentry Ryan Riggen</Text>
          </View>

          <View style={styles.item}>
            <Avatar
              kind="person"
              size="large"
              name="gentry ryan riggen"
              image="https://unsplash.it/100/100/?random"
            />
            <Text style={styles.text}>gentry ryan riggen</Text>
          </View>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
  },
});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(AvatarsPage);