import {
  Route, Switch,
} from 'react-router-dom';
import React from 'react';
import Carousel from './Carousel';
import SearchTournamentsPage from './SearchTournamentsPage';
import '../resources/styles/grid.css';
import Header from './Header';


const App = () => (
  <div className="full">
    <Switch>
      <Route
        exact
        path="/"
      >
        <div className="principalWrapper">
          <Header />

          <div className="Principal-Section">
            <Carousel />
          </div>
        </div>

      </Route>
      <Route
        exact
        path="/tournaments"
      >
        <SearchTournamentsPage />

      </Route>
    </Switch>
  </div>
);

export default App;
