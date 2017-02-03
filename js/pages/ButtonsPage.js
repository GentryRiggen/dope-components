import React from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Page from '../native-components/layout/Page';
import Button from '../native-components/elements/Button';
import theme from '../native-components/common/theme';
import StyleSheet from '../native-components/common/StyleSheet';

class ButtonsPage extends React.Component {
  getButtons() {
    return (
      <View>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button kind="primary" text="Primary" flat/>
          </View>
          <View style={styles.button}>
            <Button kind="primary" text="Primary"/>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button kind="secondary" text="secondary" flat/>
          </View>
          <View style={styles.button}>
            <Button kind="secondary" text="secondary"/>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button kind="secondary" disabled text="disabled" flat/>
          </View>
          <View style={styles.button}>
            <Button kind="secondary" disabled text="disabled"/>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Page
        navTitle="Buttons"
        navigation={this.props.navigation}
        backButton
      >
        <View
          style={{
            backgroundColor: theme.grey200,
            padding: 16,
          }}
        >
          {this.getButtons()}
        </View>

        <View
          style={{
            backgroundColor: theme.grey900,
            padding: 16,
          }}
        >
          {this.getButtons()}
        </View>
      </Page>
    );
  }
}

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

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(ButtonsPage);
