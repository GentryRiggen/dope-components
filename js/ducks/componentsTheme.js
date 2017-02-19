import {
  theme,
  getTheme,
} from '../components';

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
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
