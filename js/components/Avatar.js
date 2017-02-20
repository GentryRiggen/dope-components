import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';
import Text from './Text';

class Avatar extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf(['person', 'icon']),
    size: React.PropTypes.oneOf(['small', 'large']),
    image: React.PropTypes.string,
    name: React.PropTypes.string,
  };

  static defaultProps = {
    kind: 'person',
    size: 'small',
    image: '',
    name: '',
  };

  renderPersonAvatar(avatarSize) {
    const {
      image,
      name,
      style,
    } = this.props;

    if (image) {
      return (
        <Image
          style={[
            style.personAvatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
            },
          ]}
          source={{ uri: image }}
        />
      );
    } else {
      const nameParts = (name || '').split(' ');
      let initials = '';
      if (nameParts.length >= 1) {
        initials += nameParts[0].charAt(0);
        if (nameParts.length > 1) {
          initials += nameParts[nameParts.length - 1].charAt(0);
        }
      }
      const textSize = avatarSize > 50 ? 'title' : 'body';

      return (
        <View
          style={[
            style.personAvatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
            },
          ]}
        >
          <Text styleName={`bold inverse ${textSize}`}>
            {initials.toUpperCase()}
          </Text>
        </View>
      );
    }
  }

  renderIconAvatar() {

  }

  render() {
    const {
      kind,
      size,
    } = this.props;

    let avatarSize;
    switch (size) {
      case 'large':
        avatarSize = 84;
        break;
      default:
        avatarSize = 40;
        break;
    }

    const person = kind === 'person';

    if (person) {
      return this.renderPersonAvatar(avatarSize);
    }

    return this.renderIconAvatar(avatarSize);
  }
}

export default connectStyle(`${Constants.domain}.Avatar`)(Avatar);
