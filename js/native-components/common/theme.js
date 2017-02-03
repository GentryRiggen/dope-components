import Color from 'color';

import { Platform } from 'react-native';

export default {
  // Color
  fullBlack: 'rgba(0,0,0,0.87)',
  lightBlack: 'rgba(0,0,0,0.54)',
  minBlack: 'rgba(0,0,0,0.26)',
  faintBlack: 'rgba(0,0,0,0.12)',

  fullWhite: 'rgba(256,256,256,1)',
  lightWhite: 'rgba(256,256,256,0.7)',
  minWhite: 'rgba(256,256,256,0.3)',
  faintWhite: 'rgba(256,256,256,0.12)',

  primary: '#009fdb',
  error: '#f04f43',
  warning: '#fbbd4e',
  success: '#3dc650',

  grey900: '#212121',
  grey800: '#424242',
  grey700: '#616161',
  grey600: '#757575',
  grey500: '#9e9e9e',
  grey400: '#bdbdbd',
  grey300: '#e0e0e0',
  grey200: '#eeeeee',
  grey100: '#f5f5f5',
  grey50: '#fafafa',

  // Typography
  fontSizeH1: 34,
  lineHeightH1: 36,
  fontWeightH1: '300',

  fontSizeH2: 24,
  lineHeightH2: 24,
  fontWeightH2: '300',

  fontSizeH3: 20,
  lineHeightH3: 20,
  fontWeightH3: '700',

  fontSizeH4: 16,
  lineHeightH4: 24,
  fontWeightH4: '300',

  fontSizeH5: 14,
  lineHeightH5: 24,
  fontWeightH5: '700',

  fontSizeH6: 14,
  lineHeightH6: 20,
  fontWeightH6: '300',

  fontSizeH7: 12,
  lineHeightH7: 14,
  fontWeightH7: '300',

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
  fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
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
