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
          <Text size="Title" weight="Bold">Title Display BOLD</Text>
          <Text size="Title" weight="Regular">Title Display REGULAR</Text>
          <Text size="Title" weight="Light">Title Display LIGHT</Text>

          <Text size="Subheading" weight="Bold">Subheading Caption BOLD</Text>
          <Text size="Subheading" weight="Regular">Subheading Caption REGULAR</Text>
          <Text size="Subheading" weight="Light">Subheading Caption LIGHT</Text>

          <Text size="Body" weight="Bold">Body Body 1 BOLD</Text>
          <Text size="Body" weight="Regular">Body Body 1 REGULAR</Text>
          <Text size="Body" weight="Light">Body Body 1 LIGHT</Text>
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
