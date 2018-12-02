import React from 'react';
import Patient_Form from "./patient_Form.jsx";
import Medicine_Drugs from "./medice_drugs.jsx";
import Navi from './navi.jsx'

import style from "../css/style.css"

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default

class Welcome_Website extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
             <HashRouter>
                 <div>
                         <Route exact path='/' component={Navi}/>
                         <Route path='/new_patient' component={Patient_Form}/>
                         <Route path='/medicine_drugs' component={Medicine_Drugs}/>
                         {/*<Route path='/contacts' component={Contacts}/>*/}
                         {/*<Route path='/log_out' component={Log_Out}/>*/}
                 </div>
             </HashRouter>
     )
   }
 }
