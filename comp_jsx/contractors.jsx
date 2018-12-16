import React from 'react';
import Navi from './navi.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

export default

class Contractors extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section>
             <Header/>
             <section className='middle_section'>
                 <Navi/>
                 <section className='section_contractors'>
                     <h1 style={{fontSize: "25px"}}>ERROR 404 :P</h1>
                 </section>
             </section>
             <Footer/>
         </section>
     )
   }
 }