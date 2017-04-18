
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Routes from 'root/routes';
import { Stores } from 'root/stores';
import { appLoadingStarted } from 'root/actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'root/styles/index.scss';

Stores.dispatch(appLoadingStarted());

module.hot && module.hot.accept();

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <AppContainer>
      <Provider store={Stores}>
        <Routes/>
      </Provider>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('app')
);
