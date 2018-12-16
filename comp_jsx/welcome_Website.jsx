import React from 'react';
import Patient_Form from "./patient_Form.jsx";
import Medicine_Drugs from "./medice_drugs.jsx";
import Contractors from './contractors.jsx'
import Calendar from './calendar.jsx'
import First from './first.jsx'


import style from "../css/main.css";

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
         <>
             <HashRouter>
                 <section>
                     <Route exact path='/' component={First}/>
                     <Route path='/new_patient' component={Patient_Form}/>
                     <Route path='/add_visit' component={Calendar}/>
                     <Route path='/medicine_drugs' component={Medicine_Drugs}/>
                     <Route path='/contractors' component={Contractors}/>
                         {/*<Route path='/log_out' component={Log_Out}/>*/}
                 </section>
             </HashRouter>
         </>
     )
   }
 }
