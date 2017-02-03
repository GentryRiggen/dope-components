import React from 'react';
import R from 'ramda';
import {
  Icon,
  Thumbnail,
} from 'native-base';
import { View } from 'react-native';
import Text from '../typography/Text';
import theme from '../common/theme';
import StyleSheet from '../common/StyleSheet';

class Avatar extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf(['person', 'icon']),
    size: React.PropTypes.oneOf(['small', 'large']),
    images: React.PropTypes.any,
    name: React.PropTypes.string,
  };

  static defaultProps = {
    kind: 'person',
    size: 'small',
    images: false,
  };

  renderPersonAvatar(avatarSize) {
    const {
      images,
      name,
    } = this.props;
    const thumbnailPath = R.propOr(false, 'thumbnail', (images || {}));

    if (thumbnailPath) {
      return (
        <Thumbnail
          size={avatarSize}
          source={{uri: thumbnailPath}}
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

      return (
        <View
          style={[
            styles.personAvatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
            }
          ]}
        >
          <Text
            size="H5"
            type="regular"
            inverse
          >
            {initials}
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
      images,
      name,
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
    backgroundColor: theme.grey400,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Avatar;