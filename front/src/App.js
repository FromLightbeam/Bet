import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomeLayout from './layouts/homeLayout' 
import Home from './pages/home';
import Club from './pages/club';
import Admin from './pages/admin';
import Match from './pages/match';
import * as routes from './consts/routes';
import './App.css';

function App() {
  return (
    <Router>
      <HomeLayout>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ADMIN} component={Admin} />
        <Route path={routes.MATCH} component={Match} />
        <Route path={routes.CLUB} component={Club} />
      </HomeLayout>
    </Router>
  );
}


export default App;
