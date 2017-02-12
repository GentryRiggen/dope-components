import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import Text from './Text';
import theme from './lib/theme';
import StyleSheet from './lib/StyleSheet';

class Avatar extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf(['person', 'icon']),
    size: React.PropTypes.oneOf(['small', 'large']),
    image: React.PropTypes.any,
    name: React.PropTypes.string,
  };

  static defaultProps = {
    kind: 'person',
    size: 'small',
    image: false,
  };

  renderPersonAvatar(avatarSize) {
    const {
      image,
      name,
    } = this.props;

    if (image) {
      return (
        <Image
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }}
          source={{uri: image}}
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
      const textSize = avatarSize > 50 ? 'Title' : 'Body';

      return (
        <View
          style={[
            styles.personAvatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
            },
          ]}
        >
          <Text
            size={textSize}
            type="regular"
            weight="Bold"
            inverse
          >
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

const styles = StyleSheet.create({
  personAvatar: {
    backgroundColor: theme.colors.grey[400],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Avatar;