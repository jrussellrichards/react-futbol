import React from 'react'
import Tournament from './Card.jsx'
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
        <Carousel
          className="carousel"
          name='Copa de campeones'
          description=' Solo para los campeones de cada liga en su carrera'
          contact_name='Joaquin Cardenas'
          contact_number='+56951097841'
          date_tournament='2020-03-15'
          sport='Baby futbol'
        />

        {/* <Tournament className="tournament"
      name='Copa de campeones'
      description=' Solo para los campeones de cada liga en su carrera'
      contact_name='Joaquin Cardenas'
      contact_number='+56951097841'
      date_tournament='2020-03-15'
      sport='Baby futbol'
    /> */}
      </Route>
      <Route
        path = "/tournaments"
      >
        {/* <Modal
              name='Copa de campeones'
              description=' Solo para los campeones de cada liga en su carrera'
              contact_name='Joaquin Cardenas'
              contact_number='+56951097841'
              date_tournament='2020-03-15'
              sport='Baby futbol' /> */}
      <Tournament
        title = "Copa humanidades"
        description = " El más distinguido campeonato de baby fútbol en la Universidad de Concepción, luego del campeonato organiado por informática.
        Se enfrentarán los más distinguidos equipos de todas las carreras, y para participar debes tener coraje y pasar por pruebas de selección."
        date = "14 de Marzo, 2020"
        requierements = "Mínimo de 7 jugadores
        máximo de 15.
        Modalidad: 5 vs 5
        Inscripción: $15.000
        Árbitro: $2.500 cada partido"
      />
        
    
      </Route>
    </Switch>
  </div >
)

export default App


