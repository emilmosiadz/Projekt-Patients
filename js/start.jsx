import React from 'react';
import ReactDOM from 'react-dom';

import Img from 'react-image';

import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import LogIn from '../comp_jsx/log_in.jsx';
import Welcome_Website from '../comp_jsx/welcome_Website.jsx';
import Medicine_Drugs from '../comp_jsx/medice_drugs.jsx';
import Patient_Form from "../comp_jsx/patient_Form.jsx";
import Navi from "../comp_jsx/navi.jsx";
import PDF from "../comp_jsx/pdf_form.jsx";


import style from "../css/main.css"

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



require('../img/I.V.CLINIC_logo_pion_RGB.jpg');
require('../img/I.V.CLINIC_logo_pion_RGB.png');


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