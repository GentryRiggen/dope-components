import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  Button,
  Page,
  StyleSheet,
  theme,
} from '../components';
import { navigateBack } from '../ducks/navigationReducer';

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ButtonsPage extends React.Component {
  getButtons(inverse = false) {
    const noOp = () => null;
    return (
      <View>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button kind="primary" text="Primary" flat onPress={noOp} inverse={inverse} />
          </View>
          <View style={styles.button}>
            <Button kind="primary" text="Primary" onPress={noOp} inverse={inverse} />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button kind="secondary" text="secondary" flat onPress={noOp} inverse={inverse} />
          </View>
          <View style={styles.button}>
            <Button kind="secondary" text="secondary" onPress={noOp} inverse={inverse} />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button kind="secondary" disabled text="disabled" flat onPress={noOp} inverse={inverse} />
          </View>
          <View style={styles.button}>
            <Button kind="secondary" disabled text="disabled" onPress={noOp} inverse={inverse} />
          </View>
        </View>
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
          title: 'Buttons',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.grey[200],
            padding: 16,
          }}
        >
          {this.getButtons()}
        </View>

        <View
          style={{
            backgroundColor: theme.colors.grey[900],
            padding: 16,
          }}
        >
          {this.getButtons(true)}
        </View>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ButtonsPage);
