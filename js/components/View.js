import React from 'react';
import { View as RNView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

const View = props => <RNView {...props} />;

View.propTypes = {
  ...RNView.propTypes,
};

export default connectStyle(`${Constants.domain}.View`)(View);
