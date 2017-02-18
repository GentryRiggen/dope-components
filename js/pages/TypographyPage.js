import React from 'react';
import { View } from 'react-native';
import {
  Page,
  Text,
  theme,
} from '../components';

class TypographyPage extends React.Component {
  render() {
    return (
      <Page
        navBar={{
          title: 'Typography',
         }}
      >
        <View
          style={{
            padding: 16,
          }}
        >
          <Text styleName="bold title">Title Display BOLD</Text>
          <Text styleName="regular title">Title Display REGULAR</Text>
          <Text styleName="light title">Title Display LIGHT</Text>

          <Text styleName="bold subheading">Subheading Caption BOLD</Text>
          <Text styleName="regular subheading">Subheading Caption REGULAR</Text>
          <Text styleName="light subheading">Subheading Caption LIGHT</Text>

          <Text styleName="bold body">Body Body 1 BOLD</Text>
          <Text styleName="regular body">Body Body 1 REGULAR</Text>
          <Text styleName="light body">Body Body 1 LIGHT</Text>
        </View>

        <View
          style={{
            backgroundColor: theme.colors.grey[900],
            marginTop: 8,
            padding: 16,
          }}
        >
          <Text styleName="regular inverse">Selected</Text>
          <Text styleName="secondary inverse">Secondary</Text>
          <Text styleName="disabled inverse">Disabled</Text>
          <Text styleName="primary inverse">Button/Hyperlink</Text>
          <Text styleName="error inverse">Error</Text>
        </View>
      </Page>
    );
  }
}

export default TypographyPage;
