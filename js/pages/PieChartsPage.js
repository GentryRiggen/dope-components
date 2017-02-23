import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  Button,
  Page,
  Text,
  PieChart,
} from '../components';
import { navigateBack } from '../ducks/navigationReducer';

const randomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

class PieChartsPage extends React.Component {
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
      const data = [];
      let amount = 0;
      for (let i = 0; i < 10; i++) {
        const name = randomDate(new Date(2016, 0, 1), new Date());
        const rand = Math.floor(Math.random() * 25);
        const left = 100 - amount;
        if (rand > left) {
          data.push({ value: left, name });
          break;
        }
        data.push({ value: rand, name });
        amount += rand;
      }

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
          title: 'Pie Charts',
          onBackButtonPress: () => dispatch(navigateBack(navigation.key)),
        }}
      >
        <View style={{ marginTop: 16, marginBottom: 8 }}>

          <PieChart
            data={this.state.data}
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

export default connect(mapStateToProps)(PieChartsPage);
