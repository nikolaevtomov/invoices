
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import invoices from 'root/reducers/invoices';
import ui from 'root/reducers/ui';

const rootReducer = combineReducers({
  invoices,
  ui,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
