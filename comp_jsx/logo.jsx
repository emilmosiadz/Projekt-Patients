import React from 'react';

import logo from '../img/I.V.CLINIC_logo_poziom_RGB.png';



export default

class Logo extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <div className='logo_png'>
             <a><img src={logo}/></a>
         </div>
     )
   }
 }