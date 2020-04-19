import React from 'react';
import {
    Route, Switch,BrowserRouter
} from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { LoginPage } from '@/LoginPage';
import { SearchTournamentsPage } from '@/SearchTournamentsPage';

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>

                    <Switch>
                        <Route
                            exact
                            path="/"
                        >

                            <SearchTournamentsPage />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export { App }; 