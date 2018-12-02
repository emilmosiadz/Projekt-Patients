import React from 'react';
import ReactDOM from 'react-dom';
import style from "../css/style.css"

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
                <ul>
                    <NavLink exact to='/'>Start</NavLink>
                    <NavLink to='/new_patient'>Nowy Pacjent</NavLink>
                    <NavLink to='/medicine_drugs'>Leki</NavLink>
                    {/*<NavLink to='contacs'>Kontakty</NavLink>*/}
                    {/*<NavLink to='/log_out'>Wyloguj</NavLink>*/}
                </ul>
            </nav>

        )
    }
}