import {
  theme,
  getTheme,
} from '../components';

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
  font: {
    ...theme.font,
  },
  dimensions: {
    ...theme.dimensions,
  },
};

const initialState = {
  ...getTheme(myTheme),
};

const componentsTheme = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default componentsTheme;
