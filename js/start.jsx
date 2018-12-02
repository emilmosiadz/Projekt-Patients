import React from 'react';
import ReactDOM from 'react-dom';

import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import LogIn from '../comp_jsx/log_in.jsx';
import Welcome_Website from '../comp_jsx/welcome_Website.jsx';
import Medicine_Drugs from '../comp_jsx/medice_drugs.jsx';
import Patient_Form from "../comp_jsx/patient_Form.jsx";


import style from "../css/style.css"

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



class App extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
             <LogIn/>
     )
   }
 }




document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});