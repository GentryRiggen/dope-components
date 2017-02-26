const getStyle = (colors) => ({
  listItem: {
    backgroundColor: colors.pageBackgroundColor,
  },
  underlayColor: colors.pageBackgroundColor,
  container: {
    backgroundColor: 'transparent',
    paddingLeft: 16,
  },
  innerContainer: {
    paddingTop: 12,
    paddingRight: 8,
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
