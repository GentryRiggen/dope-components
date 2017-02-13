import React from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white.full,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white.full,
    paddingBottom: theme.dimensions.tabBarHeight,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: theme.dimensions.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.tabBarBackgroundColor,
  },
});

class TabBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    tabViews: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number.isRequired,
  };

  getPageStyle(index) {
    if (index !== this.props.selectedIndex) {
      return {
        position: 'absolute',
        bottom: -windowHeight * 2,
      };
    }

    return styles.content;
  }

  renderTabViews() {
    return this.props.tabViews.map((view, index) => (
      <View
        key={index}
        style={this.getPageStyle(index)}
      >
        {view}
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTabViews()}
        <View style={styles.footer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default TabBar;
