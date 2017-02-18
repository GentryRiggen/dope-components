import React from 'react';
import { Text as RNText } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import * as Constants from './lib/constants';
import theme from './lib/theme';

const styles = {
  '.regular': {
    fontFamily: theme.font.fontFamilyRegular,
    color: theme.colors.darkTextColor,
    '.inverse': {
      color: theme.colors.lightTextColor,
    },
  },
  '.bold': {
    fontFamily: theme.font.fontFamilyBold,
    '.inverse': {
      color: theme.colors.lightTextColor,
    },
  },
  '.light': {
    fontFamily: theme.font.fontFamilyLight,
    '.inverse': {
      color: theme.colors.lightTextColor,
    },
  },
  '.title': {
    fontSize: theme.font.fontSizeTitle,
    lineHeight: theme.font.fontHeightTitle,
  },
  '.subheading': {
    fontSize: theme.font.fontSizeSubheading,
    lineHeight: theme.font.fontHeightSubheading,
  },
  '.body': {
    fontSize: theme.font.fontSizeBody,
    lineHeight: theme.font.fontHeightBody,
  },
  '.secondary': {
    color: theme.colors.secondaryDarkTextColor,
    '.inverse': {
      color: theme.colors.secondaryLightTextColor,
    },
  },
  '.disabled': {
    color: theme.colors.disabledDarkTextColor,
    '.inverse': {
      color: theme.colors.disabledLightTextColor,
    },
  },
  '.primary': {
    color: theme.colors.primaryColor,
    '.inverse': {
      color: theme.colors.primaryColor,
    },
  },
  '.error': {
    color: theme.colors.errorColor,
    '.inverse': {
      color: theme.colors.errorColor,
    },
  },
  '.center': {
    textAlign: 'center',
  },

  fontFamily: theme.font.fontFamilyRegular,
  color: theme.colors.darkTextColor,
  fontSize: theme.font.fontSizeBody,
  lineHeight: theme.font.fontHeightBody,
  textAlign: 'auto',
  backgroundColor: 'transparent',
};

const Text = props => <RNText {...props}>{props.children}</RNText>;
Text.propTypes = {
  ...RNText.propTypes,
};

export default connectStyle(`${Constants.domain}.Text`, styles)(Text);
