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
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 48,
    maxWidth: 48,
    paddingRight: 8,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 48,
    maxWidth: 48,
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
