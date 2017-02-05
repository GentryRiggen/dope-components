import Color from 'color';

import { Platform } from 'react-native';

export default {
  font: {
    fontFamily: 'Roboto-Light',

    fontSizeTitle: 20,
    fontHeightTitle: 28,

    fontSizeSubheading: 16,
    fontHeightSubheading: 20,

    fontSizeBody: 14,
    fontHeightBody: 18,
  },

  colors: {
    white: '#FFFFFF',
    black: '#000000',

    red50: '#FFEBEE',
    red100: '#FFCDD2',
    red200: '#EF9A9A',
    red300: '#E57373',
    red400: '#EF5350',
    red500: '#F44336',
    red600: '#E53935',
    red700: '#D32F2F',
    red800: '#C62828',
    red900: '#B71C1C',

    orange50: '#FFF3E0',
    orange100: '#FFE0B2',
    orange200: '#FFCC80',
    orange300: '#FFB74D',
    orange400: '#FFA726',
    orange500: '#FF9800',
    orange600: '#FB8C00',
    orange700: '#F57C00',
    orange800: '#EF6C00',
    orange900: '#E65100',

    yellow50: '#FFFDE7',
    yellow100: '#FFF9C4',
    yellow200: '#FFF59D',
    yellow300: '#FFF176',
    yellow400: '#FFEE58',
    yellow500: '#FFEB3B',
    yellow600: '#FDD835',
    yellow700: '#FBC02D',
    yellow800: '#F9A825',
    yellow900: '#F57F17',

    blue50: '#E3F2FD',
    blue100: '#BBDEFB',
    blue200: '#90CAF9',
    blue300: '#64B5F6',
    blue400: '#42A5F5',
    blue500: '#2196F3',
    blue600: '#1E88E5',
    blue700: '#1976D2',
    blue800: '#1565C0',
    blue900: '#0D47A1',

    green50: '#E8F5E9',
    green100: '#C8E6C9',
    green200: '#A5D6A7',
    green300: '#81C784',
    green400: '#66BB6A',
    green500: '#4CAF50',
    green600: '#43A047',
    green700: '#388E3C',
    green800: '#2E7D32',
    green900: '#1B5E20',

    grey50: '#FAFAFA',
    grey100: '#F5F5F5',
    grey200: '#EEEEEE',
    grey300: '#E0E0E0',
    grey400: '#BDBDBD',
    grey500: '#9E9E9E',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',

    blueGrey50: '#ECEFF1',
    blueGrey100: '#CFD8DC',
    blueGrey200: '#B0BEC5',
    blueGrey300: '#90A4AE',
    blueGrey400: '#78909C',
    blueGrey500: '#607D8B',
    blueGrey600: '#546E7A',
    blueGrey700: '#455A64',
    blueGrey800: '#37474F',
    blueGrey900: '#263238',

    indigo100: '#C5CAE9',
    indigo500: '#3F51B5',
    indigo700: '#303F9F',

    pink50: '#FCE4EC',
    pink100: '#F8BBD0',
    pink200: '#F48FB1',
    pink300: '#F06292',
    pink400: '#EC407A',
    pink500: '#E91E63',
    pink600: '#D81B60',
    pink700: '#C2185B',
    pink800: '#AD1457',
    pink900: '#880E4F',

    darkTextColor: 'rgba(0,0,0,0.87)',
    secondaryDarkTextColor: 'rgba(0,0,0,0.54)',
    disabledDarkTextColor: 'rgba(0,0,0,0.38)',
    dividerDarkColor: 'rgba(0,0,0,0.12)',

    lightTextColor: 'rgba(255,255,255,1)',
    secondaryLightTextColor: 'rgba(255,255,255,0.7)',
    disabledLightTextColor: 'rgba(255,255,255,0.5)',
    dividerLightColor: 'rgba(255,255,255,0.12)',

    get primaryColor () {
      return this.blue500;
    },
    get accentColor () {
      return this.pink500;
    },
    get successColor () {
      return this.green500;
    },
    get errorColor () {
      return this.red500;
    },
    get warningColor () {
      return this.orange500;
    },
  },
}
