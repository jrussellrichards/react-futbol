import React, { useState,useEffect } from 'react';
import Tournaments from './ListTournaments';
import ListSports from './ListSports';
import BottomNavigation from './BottomNavigation';
import '../resources/styles/grid.css';
import Header from './Header';


export default function SearchTournamentsPage() {
  const [sport, setSport] = useState('futbol5');
  const [date, setDate] = useState('all');
  const handleSportFilter = (inputSport) => {
    setSport(inputSport);
  };

  

  return (
    <div className="principalWrapper">
      <Header />

      <div className="SearchTournamentsWrapper">
        <ListSports
          onChangeSport={handleSportFilter}
        />
        <BottomNavigation />
        <Tournaments
        sport = {sport}


        />

      </div>
    </div>
  );
}
