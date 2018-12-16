import React from 'react';
import ReactDOM from 'react-dom';
import Welcome_Website from "./welcome_Website.jsx";
import Header from './header.jsx';
import style from "../css/main.css";
import logo from '../img/I.V.CLINIC_logo_poziom_RGB.png';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default

class LogIn extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                login: "",
                password: "",
                access: true,


                correct_login: "user",
                correct_password: "1234"
            }
        }

        input_value = (e) => {
            this.setState({
                login: e.target.value
            })
        }

        password_value = (e) => {
            this.setState({
                password: e.target.value
            })
        }


        login_btn = (e) => {
            e.preventDefault();

            if (this.state.password === this.state.correct_password || this.state.login === this.state.correct_login) {
                this.setState({
                    access: true
                })
            }

            else {
                return <LogIn/>
            }
        }

        render(){
                if (!this.state.access) {

                    return <>
                        <Header/>
                         <section id="conteiner_logIn">
                             <section id="sect_logIn">
                                 <div id="div_login_input">
                                    Login: <input type="text" value={this.state.login} id="login_input" onChange={this.input_value}/>
                                </div>
                                <div id="div_password_input">
                                    Hasło: <input type="password" value={this.state.password} id="password_input"
                                                  onChange={this.password_value}/>
                                </div>
                                <button type="submit" onSubmit={this.login_btn} id='btn_submit'>Zaloguj</button>
                            </section>
                        </section>
                        </>

                }

                else {
                    return <Welcome_Website/>
                }

        }
    }
