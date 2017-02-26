const getStyle = (colors, font) => ({
  '.regular': {
    color: colors.darkTextColor,
  },
  '.secondary': {
    color: colors.secondaryDarkTextColor,
  },
  '.disabled': {
    color: colors.disabledDarkTextColor,
  },
  '.primary': {
    color: colors.primaryColor,
  },
  '.accent': {
    color: colors.accentColor,
  },
  '.error': {
    color: colors.errorColor,
  },
  '.warning': {
    color: colors.warningColor,
  },
  '.success': {
    color: colors.successColor,
  },
  '.small': {
    size: 24,
  },
  '.big': {
    size: 64,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    padding: 8,
  },
  color: colors.primaryColor,
  size: 48,
});

export default getStyle;
