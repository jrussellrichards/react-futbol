import React from 'react';
import Tournament from './Card.jsx'
var tournaments = require('../resources/data/tournament.json')




export default function ListTournaments(props) {


  return (
    tournaments.map(
      tournament =>
        <Tournament
          title={tournament.title}
          description={tournament.description}
          requierements={tournament.requierements}
          date={tournament.date}
          img={tournament.img}

        />

    )
  )
}

