import { cardStackReducer } from 'react-native-navigation-redux-helpers';
import { actions } from 'react-native-navigation-redux-helpers';

const { popRoute } = actions;
const PREFIX = '@@navigation';

export const NAVIGATE_BACK = `${PREFIX}/NAVIGATE_BACK`;
export const navigateBack = (key) => {
  return (dispatch) => {
    dispatch(popRoute(key));
  };
};

const getNavigationReducer = (initialState) => {
  return cardStackReducer(initialState);
};
export default getNavigationReducer;