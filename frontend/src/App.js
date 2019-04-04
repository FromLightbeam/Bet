import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { sagaMiddleware } from './middleware'
import saga from './sagas'
import { Provider } from 'react-redux';
import store from './store';
import home from './pages/Home'
import login from './pages/Login'
import account from './pages/Account'
import campaign from './pages/Campaign'
import ReduxToastr from 'react-redux-toastr';

function App() {
  return (
    <div>
      <Provider store={store}>
        <React.Fragment>
          <ReduxToastr closeOnToastrClick={true} />
          <Router>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/my/cards" component={account} />
              <Route exact path="/campaign/:id" component={campaign} />

              {/* <Route component={GenericNotFound} /> */}
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
    </div>
  );
}

export default App;
sagaMiddleware.run(saga);
