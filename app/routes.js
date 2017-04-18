import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Stores } from 'root/stores';
import App from 'root/containers/app';
import Home from 'root/components/home';
import Invoices from 'root/containers/invoices';
import EditInvoice from 'root/components/edit-invoice';
import AddInvoice from 'root/components/add-invoice';

const history = syncHistoryWithStore(browserHistory, Stores);

export default () => (
  <Router history={history}>

    <Route path={'/'} component={App}>

      <IndexRoute component={Home} />

      <Route path={'invoices'} component={Invoices} />

      <Route path={'invoices/add'} component={AddInvoice} />

      <Route path={'invoices/:id'} component={EditInvoice} />

    </Route>

    <Redirect from={'*'} to={'/'} />

  </Router>
);
