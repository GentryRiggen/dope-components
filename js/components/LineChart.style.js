const getStyle = (colors, font) => ({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stroke: colors.primaryColor,
  fill: colors.primaryColor,
  ticksYContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tickLabelY: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'transparent',
  },
  tickLabelYText: {
    fontSize: font.fontSizeSmall,
    textAlign: 'center',
  },
  ticksYDot: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: colors.darkTextColor,
    borderRadius: 100,
  },
  tickLabelX: {
    position: 'absolute',
    bottom: 12,
    fontSize: font.fontSizeSmall,
    fontFamily: font.fontFamilyRegular,
    textAlign: 'center',
    transform: [{
      rotate: '-82deg',
    }],
  },
});

export default getStyle;
