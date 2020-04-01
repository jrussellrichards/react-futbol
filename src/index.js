import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './state/reducers/index'
import App from './components/App.jsx'
import { BrowserRouter, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "typeface-roboto";

// import 'typeface-roboto';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

// let store = createStore(todoApp)

render(
    <BrowserRouter>

    <App/> 
    </BrowserRouter>
    ,
    document.getElementById('root')
)