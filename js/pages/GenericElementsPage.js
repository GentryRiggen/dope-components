import React from 'react';
import { connect } from 'react-redux';
import Page from '../native-components/layout/Page';

class AlertBannerPage extends React.Component {
  render() {
    return (
      <Page
        navTitle="Page"
        backButton
        navigation={this.props.navigation}
      >
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.componentsNavigation,
  };
}

export default connect(mapStateToProps)(AlertBannerPage);
