import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import StyleSheet from '../common/StyleSheet';
import theme from '../common/theme';

const window = Dimensions.get('window');

class Tab extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    image: React.PropTypes.any.isRequired,
    onPress: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
  };

  renderFooterTab(index) {
  }

  renderFooter() {
    // Don't show footer when logging in
    if (this.state.selectedTab === 0) {
      return <View />;
    }

    return (
      <View style={styles.footer}>
        {Object.keys(this.state.tabs).map(index => this.renderFooterTab(index))}
      </View>
    );
  }

  getPageStyle(index) {
    if (index !== this.state.selectedTab) {
      return {
        position: 'absolute',
        bottom: -window.height,
      };
    }

    return styles.content;
  }

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
        underlayColor={theme.grey800}
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
    alignItems: 'center',
    height: 48,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.grey800,
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
    color: theme.fullWhite,
    fontSize: 12,
    marginTop: 4,
  },
  footerTabTextSelected: {
    color: theme.primary,
  },
  footerTabImage: {
    tintColor: theme.fullWhite,
  },
  footerTabImageSelected: {
    tintColor: theme.primary,
  },
});

export default Tab;
