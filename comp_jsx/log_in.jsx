import React from 'react';
import ReactDOM from 'react-dom';
import Welcome_Website from "./welcome_Website.jsx";
import style from "../css/style.css"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default

class LogIn extends React.Component {
        constructor() {
            super();

            this.state = {
                logIn: '',
                password: '',
                login: true
            }
        }

        input_value = () => {
            console.log("value działa")
        }

        password_value = () => {
            console.log("password")
        }


        submit_btn = () => {
            console.log("guzik")
        }

        render(){

            if (!this.state.login) {
                return <div id="conteiner_logIn">
                    <a>
                        <img alt="Tu powinno być logo :(" id="logo_IV" url="../img/I.V.CLINIC_logo_pion_RGB.jpg"/>
                    </a>
                    <section id="sect_logIn">
                        <div id="div_login_input">
                            Login: <input type="text" value={this.state.logIn} id="login_input" onChange={this.input_value}/>
                        </div>
                        <div id="div_password_input">
                            Hasło:  <input type="password" value={this.state.password} id="password_input" onChange={this.password_value}/>
                        </div>
                        <button onClick={this.submit_btn} id='btn_submit'>Zaloguj</button>
                    </section>
                </div>
            }

            else {
                return <Welcome_Website/>
            }

        }
    }
