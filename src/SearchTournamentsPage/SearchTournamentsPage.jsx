import React, { useState,useEffect } from 'react';
import '@/resources/styles/grid.css';
// import {Header,ListSports,BottomNavigation,ListTournaments} from '@/_components';
import {Header} from '@/_components';


export function SearchTournamentsPage() {
  const [sport, setSport] = useState('futbol5');
  const [date, setDate] = useState('all');
  const handleSportFilter = (inputSport) => {
    setSport(inputSport);
  };

  

  return (
    <div className="principalWrapper">
      <Header />

      {/* <div className="SearchTournamentsWrapper">
        <ListSports
          onChangeSport={handleSportFilter}
        />
        <BottomNavigation />
        <Tournaments
        sport = {sport}


        />

      </div> */}
    </div>
  );
}

