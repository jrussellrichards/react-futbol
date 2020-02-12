import React from 'react';
import Tournament from './Card.jsx'
var tournaments = require('../resources/data/tournament.json')
import '../resources/styles/grid.css'


export default function ListTournaments(props) {


  return (
    <div className="tournamentsWrapper">
    {tournaments.map((
      tournament,index )=>
        <Tournament
          title={tournament.title}
          description={tournament.description}
          requierements={tournament.requierements}
          date={tournament.date}
          img={tournament.img}
          key = {index}
        />

    )}
    </div>

  )
}

