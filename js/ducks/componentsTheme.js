import { theme } from '../components';

const initialState = {
  ...theme,
  'dope-components.Button': {
    '.dark': {
      backgroundColor: '#000',
    },
    '.flat': {
      backgroundColor: 'transparent',
    },
    '.raised-disabled': {
      backgroundColor: theme.colors.grey[700],
    },
    '.raisedPrimary': {
      backgroundColor: theme.colors.primaryColor,
    },
    '.raised-secondary': {
      backgroundColor: theme.colors.grey[50],
    },
  },
};

const componentsTheme = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default componentsTheme;
