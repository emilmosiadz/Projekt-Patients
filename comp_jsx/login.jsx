import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import {db, auth, googleAuthProvider} from '../configFirebase/firebase.js';
import Patient_Form from "./patient_Form.jsx";
import Medicine_Drugs from "./medice_drugs.jsx";
import Calendar from "./calendar.jsx";
import Contractors from "./contractors.jsx";
import First from "./first.jsx";

class Login extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <Switch>
             <section className='user'>
                 <Route exact path='/' component={First}/>
                 <Route path='/new_patient' component={Patient_Form}/>
                 <Route path='/add_visit' component={Calendar}/>
                 <Route path='/medicine_drugs' component={Medicine_Drugs}/>
                 <Route path='/contractors' component={Contractors}/>
             </section>
             <section className='admin'>
                 <Route path='/admin' />
             </section>
         </Switch>
     )
   }
 }

