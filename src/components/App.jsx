import React from 'react'
import Tournament from './Card.jsx'
import Tournaments from './ListTournaments.jsx'
import ListSports from './ListSports.jsx'
import Carousel from './Carousel.jsx'
import SearchTournamentsPage from './SearchTournamentsPage.jsx'
import '../resources/styles/grid.css'
import Header from './Header.jsx'
import Modal from './Modal.jsx'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


const App = () => (
  <div className ="full">
    <Switch>
      <Route
        exact path="/"
      >
        <div className="principalWrapper">
            <Header/>

          <div className = "Principal-Section">
              <Carousel />
          </div>
        </div>

      </Route>
      <Route
        exact path="/tournaments"
      >
       <SearchTournamentsPage/>

      </Route>
    </Switch>
  </div >
)

export default App


