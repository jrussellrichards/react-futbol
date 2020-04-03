import React, { useState,useEffect } from 'react';
import Tournaments from './ListTournaments';
import ListSports from './ListSports';
import BottomNavigation from './BottomNavigation';
import '../resources/styles/grid.css';
import Header from './Header';
const axios = require('axios').default;

var tournaments =[]


export default function SearchTournamentsPage() {
  const [sport, setSport] = useState('futbol5');
  const [date, setDate] = useState('all');
  const handleSportFilter = (inputSport) => {
    setSport(inputSport);
  };

  useEffect(
    
    function () {

      axios.get('https://futbol-back.herokuapp.com/tournaments/sport/'+sport)
        .then(function (response) {
          // handle success
          tournaments = response.data
          console.log(tournaments)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  )

  return (
    <div className="principalWrapper">
      <Header />

      <div className="SearchTournamentsWrapper">
        <ListSports
          onChangeSport={handleSportFilter}
        />
        <BottomNavigation />
        <Tournaments
        tournaments = {tournaments}


        />

      </div>
    </div>
  );
}
