const getStyle = (colors, font) => ({
  listItem: {
    backgroundColor: colors.pageBackgroundColor,
  },
  container: {
    paddingLeft: 16,
  },
  innerContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    width: 48,
    paddingRight: 8,
  },
  rightContainer: {
    width: 48,
    paddingLeft: 8,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  headerTextContainer: {},
  secondaryTextContainer: {
    paddingTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.dividerDarkColor,
  },
});

export default getStyle;
