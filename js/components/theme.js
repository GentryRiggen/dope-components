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

  /******* NATIVE BASE ****************/
  get brandPrimary () {
    return this.primary;
  },
  get brandInfo () {
    return this.primary;
  },
  get brandSuccess () {
    return this.success;
  },
  get brandDanger () {
    return this.error;
  },
  get brandWarning () {
    return this.warning;
  },
  get brandSidebar () {
    return this.grey900;
  },

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',


  // Button
  btnFontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  get btnPrimaryBg () {
    return this.brandPrimary;
  },
  get btnPrimaryColor () {
    return this.inverseTextColor;
  },
  get btnInfoBg () {
    return this.brandInfo;
  },
  get btnInfoColor () {
    return this.inverseTextColor;
  },
  get btnSuccessBg () {
    return this.brandSuccess;
  },
  get btnSuccessColor () {
    return this.inverseTextColor;
  },
  get btnDangerBg () {
    return this.brandDanger;
  },
  get btnDangerColor () {
    return this.inverseTextColor;
  },
  get btnWarningBg () {
    return this.brandWarning;
  },
  get btnWarningColor () {
    return this.inverseTextColor;
  },
  get btnTextSize () {
    return (Platform.OS==='ios') ? this.fontSizeBase* 1.1 :
      this.fontSizeBase-1;
  },
  get btnTextSizeLarge () {
    return this.fontSizeBase* 1.5;
  },
  get btnTextSizeSmall () {
    return this.fontSizeBase* .8;
  },
  get borderRadiusLarge () {
    return this.fontSizeBase* 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge () {
    return this.iconFontSize* 1.5;
  },
  get iconSizeSmall () {
    return this.iconFontSize* .6;
  },


  // Card
  cardDefaultBg: '#fff',


  // Check Box
  checkboxBgColor: '#039BE5',
  checkboxSize: 23,
  checkboxTickColor: '#fff',



  // Font
  fontSizeBase: 14,

  // Footer
  footerHeight: 55,
  footerDefaultBg: '#424242',

  //FooterTab
  tabBarTextColor: '#FFF',
  tabBarActiveTextColor: '#009fdb',
  tabActiveBgColor: this.footerDefaultBg,

  //Tab
  tabDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
  topTabBarTextColor: (Platform.OS === 'ios' ) ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
  topTabActiveBgColor: (Platform.OS=='ios') ? '#cde1f9' : undefined,
  topTabBarBorderColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',


  // Header
  iosToolbarBtnColor: '#007aff',
  toolbarDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
  toolbarHeight: (Platform.OS === 'ios' ) ? 64 : 56,
  toolbarIconSize: (Platform.OS === 'ios' ) ? 20 : 22,
  toolbarInputColor: '#CECDD2',
  toolbarInverseBg: '#222',
  toolbarTextColor: (Platform.OS==='ios') ? '#000' : '#fff',
  get statusBarColor() {
    return Color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
  iconMargin: 7,


  // InputGroup
  inputFontSize: 15,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor () {
    return this.textColor;
  },
  get inputColorPlaceholder () {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 40,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon () {
    return this.inputPaddingLeft* 8;
  },


  // Line Height
  btnLineHeight: 19,
  iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 30,
  lineHeight: (Platform.OS === 'ios' ) ? 20 : 24,


  // List
  listBorderColor: '#ddd',
  listDividerBg: '#ddd',
  listItemHeight: 45,
  listItemPadding: (Platform.OS === 'ios' ) ? 12 : 16,
  listNoteColor: '#808080',
  listNoteSize: 13,


  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


  // Radio Button
  radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
  radioColor: '#343434',

  get radioSelectedColor() {
    return Color('#009FDB').darken(0.0).hexString();
  },


  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',




  // Title
  titleFontSize: (Platform.OS === 'ios' ) ? 17 : 19,
  subTitleFontSize: (Platform.OS === 'ios' ) ? 12 : 14,
  subtitleColor: '#8e8e93',


  // Other
  borderRadiusBase: (Platform.OS === 'ios' ) ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,

  get darkenHeader() {
    return Color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30
}
