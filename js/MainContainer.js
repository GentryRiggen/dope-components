import React from 'react';
import { connect } from 'react-redux';
import {
  Tab,
  TabBar,
} from './components';
import ComponentsNavigator from './Navigator';
import ColorsPage from './pages/ColorsPage';
import TypographyPage from './pages/TypographyPage';

class MainContainer extends React.Component {
  static propTypes = {
    componentsNavigation: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  render() {
      const tabViews = [
      <ComponentsNavigator
        navigation={this.props.componentsNavigation}
      />,
      <ColorsPage />,
      <TypographyPage />,
    ];

    return (
      <TabBar
        tabViews={tabViews}
        selectedIndex={this.state.selectedTab}
      >
        <Tab
          onPress={() => this.setState({ selectedTab: 0 })}
          title="Components"
          selected={this.state.selectedTab === 0}
          image={require('./images/gear-outline.png')}
        />
        <Tab
          onPress={() => this.setState({ selectedTab: 1 })}
          title="Colors"
          selected={this.state.selectedTab === 1}
          image={require('./images/color-palette.png')}
        />
        <Tab
          onPress={() => this.setState({ selectedTab: 2 })}
          title="Typography"
          selected={this.state.selectedTab === 2}
          image={require('./images/typography.png')}
        />
      </TabBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentsNavigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(MainContainer);
