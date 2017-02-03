import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import StyleSheet from './StyleSheet';
import theme from './theme';

class Tab extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    image: React.PropTypes.any.isRequired,
    onPress: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
  };

  render() {
    const {
      image,
      onPress,
      selected,
      title,
    } = this.props;
    const textStyle = [styles.footerTabText];
    const imageStyle = [styles.footerTabImage];
    if (selected) {
      textStyle.push(styles.footerTabTextSelected);
      imageStyle.push(styles.footerTabImageSelected);
    }

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={theme.colors.primaryColor}
        style={styles.footerTab}
      >
        <View style={styles.footerTabContent}>
          <Image
            source={image}
            style={imageStyle}
          />
          <Text style={textStyle}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 48,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.primaryColor,
  },
  footerTab: {
    flex: 1,
  },
  footerTabContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTabText: {
    color: theme.colors.darkTextColor,
    fontSize: 12,
    marginTop: 4,
  },
  footerTabTextSelected: {
    color: theme.colors.white,
  },
  footerTabImage: {
    tintColor: theme.colors.darkTextColor,
  },
  footerTabImageSelected: {
    tintColor: theme.colors.white,
  },
});

export default Tab;
