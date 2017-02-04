import React from 'react';
import {
  View,
} from 'react-native';
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
          <Text size="Title">Title Display</Text>
          <Text size="Body">Body Body 1</Text>
          <Text size="Subheading">Subheading Caption</Text>
        </View>

        <View
          style={{
              backgroundColor: theme.colors.grey200,
              padding: 16,
            }}
        >
          <Text type="regular">Selected</Text>
          <Text type="secondary">Secondary</Text>
          <Text type="disabled">Disabled</Text>
          <Text type="primary">Button/Hyperlink</Text>
          <Text type="error">Error</Text>
        </View>

        <View
          style={{
              backgroundColor: theme.colors.grey900,
              marginTop: 8,
              padding: 16,
            }}
        >
          <Text type="regular" inverse>Selected</Text>
          <Text type="secondary" inverse>Secondary</Text>
          <Text type="disabled" inverse>Disabled</Text>
          <Text type="primary" inverse>Button/Hyperlink</Text>
          <Text type="error" inverse>Error</Text>
        </View>
      </Page>
    );
  }
}

export default TypographyPage;
