import React, { useState } from 'react';
import Tournaments from './ListTournaments';
import ListSports from './ListSports';
import BottomNavigation from './BottomNavigation';
import '../resources/styles/grid.css';
import Header from './Header';
import '../resources/styles/searchTournaments.css';

const tournaments = require('../resources/data/tournament.json');


export default function SearchTournamentsPage() {
  const [sport, setSport] = useState('all');
  const [date, setDate] = useState('all');
  const handleSportFilter = (inputSport) => {
    setSport(inputSport);
  };


  return (
    <div className="principalWrapper">
      <Header />

      <div className="SearchTournamentsWrapper">
        <h1>Browse Tournaments</h1>
        <h2>Choose your sport</h2>
        <ListSports
          onChangeSport={handleSportFilter}
        />
        <BottomNavigation />
        <Tournaments
        tournaments = {tournaments.filter(tournament => tournament.sport === sport)}

        />



      </div>
    </div>
  );
}
