import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { getColorFromType } from './lib/utils';

class MyIcon extends React.Component {
  static propTypes = {
    inverse: React.PropTypes.bool,
    size: React.PropTypes.number,
    type: React.PropTypes.oneOf([
      'regular',
      'secondary',
      'disabled',
      'error',
      'success',
      'primary',
    ]),
  };

  static defaultProps = {
    size: 24,
    type: 'regular',
    inverse: false,
  };

  setNativeProps(props) {
    this.refs['ICON_REF'].setNativeProps(props);
  }

  render() {
    const {
      inverse,
      name,
      size,
      type,
    } = this.props;
    const color = getColorFromType(type, inverse);

    return (
      <Icon
        ref="ICON_REF"
        size={size}
        name={name}
        style={{ color }}
      />
    );
  }
}

export default MyIcon;
