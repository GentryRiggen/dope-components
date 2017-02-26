import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  Button,
  Page,
  LineChart,
} from 'dope-components';
import { navigateBack } from '../ducks/navigationReducer';

const randomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.getTime();
};

class LineChartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.getData()();
  }

  getData() {
    return () => {
      const dates = [
        new Date(2016, 4, 1),
        new Date(2016, 5, 1),
        new Date(2016, 6, 1),
        new Date(2016, 7, 1),
        new Date(2016, 8, 1),
        new Date(2016, 9, 1),
        new Date(2016, 10, 1),
        new Date(2016, 11, 1),
        new Date(2016, 12, 1),
      ];
      const data = [];
      dates.forEach((date) => {
        data.push({
          y: Math.round(Math.random() * 100),
          x: date,
          time: date.getTime(),
        });
      });

      this.setState({ data });
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
          title: 'Line Charts',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
        scrollable
      >
        <View
          style={{
            marginTop: 16,
            marginBottom: 8,
            alignItems: 'center',
          }}
        >

          <LineChart
            data={this.state.data}
            selected={this.state.selected}
          />

          <Button
            styleName="raised accent"
            text="New Data"
            onPress={this.getData()}
          />
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

export default connect(mapStateToProps)(LineChartsPage);
