import React from 'react';
import ReactDOM from 'react-dom';


export default

class Footer extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <footer className="footer">
             <div className='footer_div'>I.V. Clinic spółka z ograniczoną odpowiedzialnością | ul. Abp. Józefa Teodorowicza 3/1 Warszawa 02-972 | tel: 570 55 00 33</div>
         </footer>
     )
   }
 }