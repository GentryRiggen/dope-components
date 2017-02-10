import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { navigateBack } from '../ducks/navigationReducer';
import {
  Page,
  StyleSheet,
  Spinner,
  theme,
} from '../components';

class SpinnersPage extends React.Component {
  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    return (
      <Page
        navBar={{
          title: 'Spinners',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View style={styles.container}>
          <View style={styles.spinnerContainer}>
            <Spinner type="primary" inverse={false}/>
            <Spinner type="accent" inverse={false}/>
            <Spinner type="regular" inverse={false}/>
            <Spinner type="secondary" inverse={false}/>
          </View>

          <View style={[
              styles.spinnerContainer,
              { backgroundColor: theme.colors.grey[900] }
            ]}
          >
            <Spinner type="primary" inverse={false}/>
            <Spinner type="accent" inverse={false}/>
            <Spinner type="regular" inverse/>
            <Spinner type="secondary" inverse/>
          </View>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinnerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(SpinnersPage);
