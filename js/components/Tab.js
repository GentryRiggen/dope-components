import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

const backgroundColor = theme.colors.tabBarBackgroundColor;
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
    backgroundColor,
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
    color: theme.colors.tabBarUnSelectedColor,
    fontSize: 12,
    marginTop: 4,
  },
  footerTabTextSelected: {
    color: theme.colors.primaryColor,
  },
  footerTabImage: {
    tintColor: theme.colors.tabBarUnSelectedColor,
  },
  footerTabImageSelected: {
    tintColor: theme.colors.primaryColor,
  },
});

const Tab = ({
  image,
  onPress,
  title,
  selected,
}) => {
  const textStyle = [styles.footerTabText];
  const imageStyle = [styles.footerTabImage];
  if (selected) {
    textStyle.push(styles.footerTabTextSelected);
    imageStyle.push(styles.footerTabImageSelected);
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={backgroundColor}
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
};

Tab.propTypes = {
  image: React.PropTypes.any.isRequired,
  onPress: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
};

export default Tab;
