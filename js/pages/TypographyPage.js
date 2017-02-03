import React from 'react';
import {
  View,
} from 'react-native';
import Page from '../native-components/layout/Page';
import Text from '../native-components/typography/Text';
import theme from '../native-components/common/theme';

class TypographyPage extends React.Component {
  render() {
    return (
      <Page
        navTitle="Typography"
        navigation={{}}
      >
        <View
          style={{
            padding: 16,
          }}
        >
          <Text size="H1">H1 Display</Text>
          <Text size="H2">H2 Headline</Text>
          <Text size="H3">H3 Title</Text>
          <Text size="H4">H4 Subhead</Text>
          <Text size="H5">H5 Body 2 / Menu</Text>
          <Text size="H6">H6 Body 1</Text>
          <Text size="H7">H7 Caption</Text>
        </View>

        <View
          style={{
              backgroundColor: theme.grey200,
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
              backgroundColor: theme.grey900,
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
