import React from 'react';
import R from 'ramda';
import {
  ScrollView,
  View,
} from 'react-native';
import {
  Page,
  Text,
  theme,
  StyleSheet,
} from '../components';

class ColorsPage extends React.Component {
  renderColors() {
    const colors = [
      { name: 'red', numbers: true, alpha: true, full: false },
      { name: 'pink', numbers: true, alpha: true, full: false },
      { name: 'purple', numbers: true, alpha: true, full: false },
      { name: 'deepPurple', numbers: true, alpha: true, full: false },
      { name: 'indigo', numbers: true, alpha: true, full: false },
      { name: 'blue', numbers: true, alpha: true, full: false },
      { name: 'lightBlue', numbers: true, alpha: true, full: false },
      { name: 'cyan', numbers: true, alpha: true, full: false },
      { name: 'teal', numbers: true, alpha: true, full: false },
      { name: 'green', numbers: true, alpha: true, full: false },
      { name: 'lightGreen', numbers: true, alpha: true, full: false },
      { name: 'lime', numbers: true, alpha: true, full: false },
      { name: 'yellow', numbers: true, alpha: true, full: false },
      { name: 'amber', numbers: true, alpha: true, full: false },
      { name: 'orange', numbers: true, alpha: true, full: false },
      { name: 'deepOrange', numbers: true, alpha: true, full: false },
      { name: 'brown', numbers: true, alpha: false, full: false },
      { name: 'grey', numbers: true, alpha: false, full: false },
      { name: 'blueGrey', numbers: true, alpha: false, full: false },
      { name: 'black', numbers: true, alpha: false, full: true },
      { name: 'white', numbers: false, alpha: false, full: true },
    ];

    return colors.map(color => this.renderColor(color));
  }

  renderColor(color) {
    const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const alphas = ['A100', 'A200', 'A400', 'A700'];
    const themeColor = R.path(['colors', color.name], theme);
    const fullBar = color.full ? this.renderColorBar(`${color.name} - Full`, themeColor.full) : null;
    const numberBars = color.numbers ? numbers.map((number) => this.renderColorBar(number, R.prop(number, themeColor))) : null;
    const alphaBars = color.alpha ? alphas.map((alpha) => this.renderColorBar(alpha, R.prop(alpha, themeColor))) : null;

    return (
      <View
        style={styles.colorContainer}
        key={color.name}
      >
        <View style={styles.titleContainer}>
          <Text
            size="Title"
            weight="Bold"
          >
            {color.name}
          </Text>
        </View>

        {fullBar}
        {numberBars}
        {alphaBars}
      </View>
    );
  }

  renderColorBar(name, value) {
    return (
      <View
        style={[styles.colorBar, { backgroundColor: value }]}
        key={name}
      >
        <Text>
          {name}
        </Text>
        <Text>
          {value}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Page
        navBar={{
          title: 'Colors',
         }}
         scrollable
      >
        <View style={styles.container}>
          {this.renderColors()}
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.tabBarHeight,
  },
  colorContainer: {
    flex: 1,
    marginTop: 4,
  },
  titleContainer: {
    paddingTop: 8,
    paddingLeft: 16,
  },
  colorBar: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default ColorsPage;
