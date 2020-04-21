import React from 'react';
import {
    Route, Switch, BrowserRouter
} from 'react-router-dom';

import { PrivateRoute } from '@/_components';
import { LoginPage } from '@/LoginPage';
import { HomePage } from '@/HomePage';
import { SearchTournamentsPage } from '@/SearchTournamentsPage';
import {CreateTournament} from '@/CreateTournamentPage/CreateTournament';
import "regenerator-runtime/runtime.js";

export class App extends React.Component {

    render() {
        return (
            <div className="full">
                <BrowserRouter>

                    <Switch>
                        <Route
                            exact
                            path="/"
                        >
                            <div className="principalWrapper">

                                <PrivateRoute exact path="/" component={HomePage} />
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
                            path="/CreateTournament"
                        >
                            <CreateTournament />
                        </Route>

                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

