import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  BarChart,
  Button,
  Page,
  Text,
} from 'dope-components';
import { navigateBack } from '../ducks/navigationReducer';

const randomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

class BarChartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
    };
  }

  componentWillMount() {
    this.getData()();
  }

  getData() {
    return () => {
      const amount = Math.floor(Math.random() * 50) + 50;
      const steps = [];
      for (let i = 0; i < amount; i++) {
        steps.push({
          y: (Math.random() * 10) * 1000,
          x: randomDate(new Date(2016, 0, 1), new Date()),
        });
      }

      this.setState({ steps });
    };
  }

  render() {
    const {
      dispatch,
      navigation,
    } = this.props;
    return (
      <Page
        navBar={{
          title: 'Bar Charts',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View style={{ marginTop: 16, marginBottom: 8 }}>
          <Text styleName="title center">Steps</Text>

          <BarChart
            yLegend="Steps"
            xLegend="Date"
            data={this.state.steps}
          />
        </View>

        <Button
          styleName="raised accent"
          text="New Data"
          onPress={this.getData()}
        />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(BarChartsPage);
