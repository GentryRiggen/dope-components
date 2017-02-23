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
      selected: -1,
    };
  }

  componentWillMount() {
    this.getData()();
  }

  getData() {
    return () => {
      const data = [];
      let amount = 0;
      for (let i = 0; i < 8; i++) {
        const name = randomDate(new Date(2016, 0, 1), new Date());
        const rand = Math.floor(Math.random() * 8) + 4.5;
        const left = 100 - amount;
        if (rand > left) {
          data.push({ value: left, name });
          break;
        }
        data.push({ value: rand, name });
        amount += rand;
      }

      this.setState({
        data,
        selected: -1,
      });
    };
  }

  pieSelected(selected) {
    return () => this.setState({ selected });
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
        scrollable
      >
        <View
          style={{
            marginTop: 16,
            marginBottom: 8,
            flexDirection: 'row',
          }}
        >

          <PieChart
            data={this.state.data}
            selected={this.state.selected}
            size={220}
          />

          <View>
            {this.state.data.map((d, i) => (
              <Button
                key={i}
                styleName={`flat ${i === this.state.selected ? 'primary' : 'secondary'}`}
                text={d.name}
                onPress={this.pieSelected(i)}
              />
            ))}
          </View>
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
