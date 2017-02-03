import Color from 'color';

import { Platform } from 'react-native';

export default {
  font: {
    fontFamily: 'Roboto',

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

    indigo100: '#C5CAE9',
    indigo500: '#3F51B5',
    indigo700: '#303F9F',

    pink100: '#FF4081',
    pink200: '#FF80AB',
    pink400: '#F50057',

    darkTextColor: 'rgba(0,0,0,0.87)',
    secondaryDarkTextColor: 'rgba(0,0,0,0.54)',
    disabledDarkTextColor: 'rgba(0,0,0,0.38)',
    dividerDarkColor: 'rgba(0,0,0,0.12)',

    lightTextColor: 'rgba(255,255,255,1)',
    secondaryLightTextColor: 'rgba(255,255,255,0.7)',
    disabledLightTextColor: 'rgba(255,255,255,0.5)',
    dividerLightColor: 'rgba(255,255,255,0.12)',

    get primaryColor () {
      return this.indigo500;
    },
    get accentColor () {
      return this.pink200;
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