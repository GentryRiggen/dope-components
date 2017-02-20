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
    const inverseStyleName = inverse ? 'inverse-' : '';

    return (
      <View>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat primary ${inverseStyleName}`}
              text="Primary"
              onPress={noOp}
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised primary ${inverseStyleName}`}
              text="Primary"
              onPress={noOp}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat accent ${inverseStyleName}`}
              text="Accent"
              onPress={noOp}
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised accent ${inverseStyleName}`}
              text="Accent"
              onPress={noOp}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat ${inverseStyleName}secondary`}
              text="Secondary"
              onPress={noOp}
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised secondary ${inverseStyleName}`}
              text="Secondary"
              onPress={noOp}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              styleName={`flat ${inverseStyleName}disabled`}
              text="Disabled"
              onPress={noOp}
              disabled
            />
          </View>
          <View style={styles.button}>
            <Button
              styleName={`raised disabled ${inverseStyleName}`}
              text="Disabled"
              onPress={noOp}
              disabled
            />
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
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}
        >
          {this.getButtons()}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: theme.colors.grey[900],
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
