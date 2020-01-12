import React from 'react'
import Tournament from './Tournament.jsx'
import Carousel from './Carousel.jsx'
import '../resources/styles/grid.css'
import Header from './Header.jsx'



const App = () => (
  <div
    // className="wrapper"
  >
    <Header/>
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
  </div >
)

export default App


