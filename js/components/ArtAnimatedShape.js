import React from 'react';
import {
  ART,
  LayoutAnimation,
} from 'react-native';
import Morph from 'art/morph/path';

const {
  Shape,
} = ART;

const AnimationDurationMs = 250;

export default class ArtAnimatedShape extends React.Component {
  static propTypes = {
    data: React.PropTypes.any.isRequired,
    stroke: React.PropTypes.any.isRequired,
    fill: React.PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      path: '',
    };
  }

  componentWillMount() {
    this.computeNextState();
  }

  componentWillReceiveProps() {
    this.computeNextState();
  }

  // Animations based on: https://github.com/hswolff/BetterWeather
  computeNextState() {
    const graph = this.props.data;

    this.setState({
      path: graph,
    });

    // The first time this function is hit we need to set the initial
    // this.previousGraph value.
    if (!this.previousGraph) {
      this.previousGraph = graph;
    }

    // Only animate if our properties change. Typically this is when our
    // yAccessor function changes.
    const pathFrom = this.previousGraph;
    const pathTo = graph;

    cancelAnimationFrame(this.animating);
    this.animating = null;

    // Opt-into layout animations so our y tickLabel's animate.
    // If we wanted more discrete control over their animation behavior
    // we could use the Animated component from React Native, however this
    // was a nice shortcut to get the same effect.
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        AnimationDurationMs,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      )
    );

    this.setState({
      // Create the ART Morph.Tween instance.
      path: Morph.Tween(
        pathFrom,
        pathTo,
      ),
    }, () => {
      // Kick off our animations!
      this.animate();
    });

    this.previousGraph = graph;
  }

  // This is where we animate our graph's path value.
  animate(start) {
    this.animating = requestAnimationFrame((timestamp) => {
      if (!start) {
        start = timestamp;
      }

      // Get the delta on how far long in our animation we are.
      const delta = (timestamp - start) / AnimationDurationMs;

      // If we're above 1 then our animation should be complete.
      if (delta > 1) {
        this.animating = null;
        // Just to be safe set our final value to the new graph path.
        this.setState({
          path: this.previousGraph,
        });

        // Stop our animation loop.
        return;
      }

      // Tween the SVG path value according to what delta we're currently at.
      this.state.path.tween(delta);

      this.setState(this.state, () => {
        this.animate(start);
      });
    });
  }

  render() {
    const { path } = this.state;
    const { stroke, fill } = this.props;
    return (
      <Shape
        d={path}
        stroke={stroke}
        fill={fill}
      />
    );
  }
}
