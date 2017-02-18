import React from 'react';
import { View as RNView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import * as Constants from './lib/constants';
import theme from './lib/theme';

const styles = {
  '.flat': {
    backgroundColor: 'transparent',
  },
  '.raised-disabled': {
    backgroundColor: theme.colors.grey[700],
  },
  '.raised-primary': {
    backgroundColor: theme.colors.primaryColor,
  },
  '.raised-secondary': {
    backgroundColor: theme.colors.grey[50],
  },
};

const View = props => <RNView {...props} />;

View.propTypes = {
  ...RNView.propTypes,
};

export default connectStyle(`${Constants.domain}.View`, styles)(View);
