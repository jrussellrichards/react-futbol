import React from 'react'
import Tournament from './Card.jsx'
import Tournaments from './ListTournaments.jsx'
import Carousel from './Carousel.jsx'
import '../resources/styles/grid.css'
import Header from './Header.jsx'
import Modal from './Modal.jsx'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


const App = () => (
  <div>
    <Header />
    <Switch>
      <Route
        exact path="/"
      >
        <Carousel />


      </Route>
      <Route
        path="/tournaments"
      >
        <div>
          <Tournaments />
        </div>




      </Route>
    </Switch>
  </div >
)

export default App


