import React from 'react';
import {
    Route, Switch, BrowserRouter,
    
} from 'react-router-dom';

import { PrivateRoute,Menu } from '@/_components';
import { LoginPage } from '@/LoginPage';
import { HomePage } from '@/HomePage';
import { SearchTournamentsPage } from '@/SearchTournamentsPage';
import {CreateTournament} from '@/CreateTournamentPage/CreateTournament';
import "regenerator-runtime/runtime.js";
import 'bulma/css/bulma.css'

export class App extends React.Component {

    render() {
        return (
            <div className="full">
                <BrowserRouter>

                    <Switch>
                        <Route
                            exact
                            path="/CreateTournament"
                        >
                            
                                <PrivateRoute exact path="/CreateTournament" component={CreateTournament} />
                           

                        </Route>
                        <Route
                            exact
                            path="/"
                        >
                            <div className="principalWrapper">
                                <HomePage/>
                            </div >

                        </Route>

                        <Route path="/login" component={LoginPage} />

                        <Route
                            exact
                            path="/tournaments"
                        >
                            <SearchTournamentsPage />
                        </Route>
                       
                        <Route
                            exact
                            path="/Menu"
                        >
                            <Menu />
                        </Route>

                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

