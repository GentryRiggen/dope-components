import {
  Constants,
  theme,
} from '../components';

const initialState = {
  ...theme,
  [`${Constants.domain}.View`]: {
  },
};

const componentsTheme = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default componentsTheme;
