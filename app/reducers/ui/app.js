
import {
  APP_LOADING,
  APP_LOADING_SUCCEED,
  APP_LOADING_FAILED
} from '../../actions';

export const setInitialState = () => {
  let state = {};

  return {
    loading: false,
    failed: false
  };
};

export const initialState = setInitialState();

export default function(state = initialState, { type }) {

  switch (type) {

  case APP_LOADING:
    return {
      ...state,
      loading: true
    };

  case APP_LOADING_SUCCEED:
    return {
      ...state,
      loading: false
    };

  case APP_LOADING_FAILED:
    return {
      ...state,
      failed: true
    };

  default:
    return state;
  }
};
