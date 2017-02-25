import React from 'react';
import {
  ART,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
const {
  Surface,
  Group,
  Shape,
} = ART;
import Morph from 'art/morph/path';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import graphing from './lib/graphing';
import Text from './Text';
import View from './View';

const dimensionWindow = Dimensions.get('window');
const xLabelHeight = 48;

class LineChart extends React.Component {
  static propTypes = {
    animationDurationMs: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
    paddingSize: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    style: React.PropTypes.any,
    strokeWidth: React.PropTypes.number,
    xSelector: React.PropTypes.func,
    ySelector: React.PropTypes.func,
  };

  static defaultProps = {
    animationDurationMs: 500,
    paddingSize: 20,
    strokeWidth: 2,
    ySelector: d => d.y,
    xSelector: d => d.x,
    width: dimensionWindow.width,
    height: Math.round(dimensionWindow.height * 0.6),
  };

  constructor(props) {
    super(props);
    this.state = {
      graphWidth: 0,
      graphHeight: 0,
      linePath: '',
    };
  }

  componentWillMount() {
    this.computeNextState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.computeNextState(nextProps);
  }

  computeNextState(nextProps) {
    const {
      animationDurationMs,
      data,
      width,
      height,
      paddingSize,
      xSelector,
      ySelector,
    } = nextProps;

    const fullPaddingSize = paddingSize * 2;
    const graphWidth = width - fullPaddingSize;
    const graphHeight = height - fullPaddingSize;

    const lineGraph = graphing.createLineGraph({
      data,
      xSelector,
      ySelector,
      width: graphWidth,
      height: graphHeight - xLabelHeight,
    });

    this.setState({
      graphWidth,
      graphHeight,
      linePath: lineGraph.path,
      ticks: lineGraph.ticks,
      scale: lineGraph.scale,
    });

    if (!this.previousGraph) {
      this.previousGraph = lineGraph;
    }

    if (this.props !== nextProps) {
      const pathFrom = this.previousGraph.path;
      const pathTo = lineGraph.path;

      cancelAnimationFrame(this.animating);
      this.animating = null;

      // Opt-into layout animations so our y tickLabel's animate.
      // If we wanted more discrete control over their animation behavior
      // we could use the Animated component from React Native, however this
      // was a nice shortcut to get the same effect.
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          animationDurationMs,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      );

      this.setState({
        linePath: Morph.Tween(
          pathFrom,
          pathTo,
        ),
      }, () => {
        this.animate();
      });

      this.previousGraph = lineGraph;
    }
  }

  animate(start) {
    const {
      animationDurationMs,
    } = this.props;
    this.animating = requestAnimationFrame((timestamp) => {
      if (!start) {
        // eslint-disable-next-line no-param-reassign
        start = timestamp;
      }

      // Get the delta on how far long in our animation we are.
      const delta = (timestamp - start) / animationDurationMs;

      if (delta > 1) {
        this.animating = null;
        this.setState({
          linePath: this.previousGraph.path,
        });
        return;
      }

      this.state.linePath.tween(delta);
      this.setState(this.state, () => {
        this.animate(start);
      });
    });
  }

  render() {
    const {
      ySelector,
      paddingSize,
      style,
      strokeWidth,
    } = this.props;
    const {
      graphWidth,
      graphHeight,
      linePath,
      ticks,
      scale,
    } = this.state;
    const tickWidth = paddingSize * 2;

    const {
      x: scaleX,
    } = scale;

    const tickXFormat = scaleX.tickFormat(null, '%b %d');

    return (
      <View
        style={{
          ...style.container,
          height: graphHeight,
          width: graphWidth,
        }}
      >
        <Surface width={graphWidth} height={graphHeight - xLabelHeight}>
          <Group x={0} y={0}>
            <Shape
              d={linePath}
              stroke={style.stroke}
              strokeWidth={strokeWidth}
            />
          </Group>
        </Surface>

        <View>
          {ticks.map((tick, index) => {
            const tickStyles = {
              ...style.tickLabelX,
              width: tickWidth,
              left: tick.x - (tickWidth / 2),
            };

            return (
              <Text
                key={index}
                style={tickStyles}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {tickXFormat(new Date(tick.datum.time * 1000))}
              </Text>
            );
          })}
        </View>

        <View style={style.ticksYContainer}>
          {ticks.map((tick, index) => {
            const value = ySelector(tick.datum);
            const tickStyles = {
              ...style.tickLabelY,
              width: tickWidth,
              left: tick.x - Math.round(tickWidth * 0.5),
              top: tick.y - Math.round(tickWidth * 0.65),
            };

            return (
              <View
                key={index}
                style={tickStyles}
              >
                <Text style={style.tickLabelYText}>
                  {value}&deg;
                </Text>
              </View>
            );
          })}
        </View>

        <View style={style.ticksYContainer}>
          {ticks.map((tick, index) => (
            <View
              key={index}
              style={{
                ...style.ticksYDot,
                left: tick.x,
                top: tick.y,
              }}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default connectStyle(Constants.components.LineChart)(LineChart);
