import React from 'react'
import Tournaments from './ListTournaments.jsx'
import ListSports from './ListSports.jsx'
import BottomNavigation from './BottomNavigation.jsx'
import '../resources/styles/grid.css'
import Header from './Header.jsx'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '../resources/styles/grid.css'
import '../resources/styles/searchTournaments.css'
import Divider from '@material-ui/core/Divider';



export default function SearchTournamentsPage() {


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
    )

}
