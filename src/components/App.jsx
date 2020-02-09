import React from 'react'
import Tournament from './Card.jsx'
import Tournaments from './ListTournaments.jsx'
import Carousel from './Carousel.jsx'
import '../resources/styles/grid.css'
import Header from './Header.jsx'
import Modal from './Modal.jsx'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '../resources/styles/grid.css'


const App = () => (
  <div>
    {/* <Header /> */}
    <Switch>
      <Route
        exact path="/"
      >
        <Carousel />


      </Route>
      <Route
        path="/tournaments"
      >
        <div className="principalWrapper">
          <div> Header</div>
          <div>
            <div>
              <Carousel />
            </div>
            <div className="tournamentsWrapper">
              <Tournaments />
            </div>
          </div>
        </div>

      </Route>
    </Switch>
  </div >
)

export default App


