

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Calendar from './components/calendar/calendar'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
const routing = (

    <Router>

        <div className="container"   >

            <div className="header">
                <h1>This is react-big-calendar Example</h1>
            </div>
            <ul className="nav nav-pills">
                <li className="active"> <NavLink to="/" exact activeStyle={{ color: 'red' }}>Home</NavLink> </li> &nbsp;&nbsp;&nbsp;
                <li><NavLink to="/calendar" exact activeStyle={{ color: 'green' }}>Calendar</NavLink ></li>         &nbsp;&nbsp;&nbsp;
            </ul>
            <div style={{height:'50px'}}></div>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/calendar" component={Calendar} />          
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));  

