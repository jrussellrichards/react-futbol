import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Menu } from '@/_components';
                 //<h1>Hi {currentUser.name}!</h1> 

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }


    render() {
        return (
                <Menu
                currentUser = {this.state.currentUser}/>

        );
    }
}

export { HomePage };
