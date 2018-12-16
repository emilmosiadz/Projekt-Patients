import React from 'react';
import ReactDOM from 'react-dom';

import style from "../css/main.css";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default

class Navi extends React.Component {
    constructor() {
        super();

    }
    render(){
        return (
                <nav className='nav'>
                    <ul className="nav_ul">
                        <NavLink to='/'><li className='nav_link'>Start</li></NavLink>
                        <NavLink to='/new_patient'><li className='nav_link'>Nowy Pacjent</li></NavLink>
                        <NavLink to='/add_visit'><li className='nav_link'>Zapisz Pacjenta</li></NavLink>
                        <NavLink to='/medicine_drugs'><li className='nav_link'>Leki</li></NavLink>
                        <NavLink to='/contractors'> <li className='nav_link'>Kontrahenci</li></NavLink>
                        <NavLink to='/log_out'><li className='nav_link'>Wyloguj</li></NavLink>
                    </ul>
                </nav>

        )
    }
}