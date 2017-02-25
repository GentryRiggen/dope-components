import React from 'react';
import {
  ART,
  Dimensions,
} from 'react-native';
import {
  arc,
  pie,
} from 'd3-shape';
const {
  Surface,
  Group,
  Shape,
} = ART;
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import View from './View';
import ArtAnimatedShape from './ArtAnimatedShape';

const windowWidth = Dimensions.get('window').width;

class PieChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    innerRadius: React.PropTypes.number,
    selected: React.PropTypes.number,
    size: React.PropTypes.number,
    style: React.PropTypes.any,
    valueSelector: React.PropTypes.func,
  };

  static defaultProps = {
    innerRadius: 30,
    selected: -1,
    size: Math.floor(windowWidth - 36),
    valueSelector: d => d.value,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      arcs: [],
    };
  }

  componentWillMount() {
    this.calculate(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.calculate(nextProps);
    }
  }

  calculate(props) {
    const {
      data,
      innerRadius,
      selected,
      size,
      valueSelector,
    } = props;
    if (data.length > 0) {
      const outerRadius = (size / 2);
      const oRNormal = outerRadius - (innerRadius + 4);
      const oRSelected = oRNormal + 12;
      this.setState({
        arcs: pie()
          .value(valueSelector)(data)
          .map((d, i) => (
            arc()
              .outerRadius(i === selected ? oRSelected : oRNormal)
              .padAngle(0.1)
              .innerRadius(innerRadius)(d)
          )),
      });
    }
  }

  render() {
    const {
      size,
      style,
    } = this.props;
    const halfSize = size / 2;
    return (
      <View>
        <View style={style.container}>
          <Surface
            width={size}
            height={size}
          >
            <Group x={halfSize} y={halfSize}>
              {this.state.arcs.map((a, index) => (
                <Shape
                  key={index}
                  d={a}
                  stroke={style.stroke}
                  fill={style.fill}
                />
              ))}
            </Group>
          </Surface>
        </View>
      </View>
    );
  }
}

export default connectStyle(Constants.components.PieChart)(PieChart);
