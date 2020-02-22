import React, { useState } from 'react';
import Tournaments from './ListTournaments';
import ListSports from './ListSports';
import BottomNavigation from './BottomNavigation';
import '../resources/styles/grid.css';
import Header from './Header';
import '../resources/styles/searchTournaments.css';

export default function SearchTournamentsPage() {
  const [sport, setSport] = useState('all');
  const [date, setDate] = useState('all');

  return (
    <div className="principalWrapper">
      <Header />

      <div className="SearchTournamentsWrapper">
        <h1>Browse Tournaments</h1>
        <h2>Choose your sport</h2>
        <ListSports />
        <BottomNavigation />
        <Tournaments />


      </div>
    </div>
  );
}
