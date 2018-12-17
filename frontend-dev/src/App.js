import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { sagaMiddleware } from './middleware'
import saga from './sagas'
import { Provider } from 'react-redux';
import store from './store';
import home from './pages/Home'
import start from './pages/Start'


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={start} />
                <Route exact path="/home" component={home} />

                {/* <Route component={GenericNotFound} /> */}
              </Switch>
              
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
sagaMiddleware.run(saga);
