import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Header } from '@/_components';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }


    render() {
        const { currentUser, users } = this.state;
        return (
                <Header/>
                {/* <h1>Hi {currentUser.name}!</h1> */}

        );
    }
}

export { HomePage };