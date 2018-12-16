import React from 'react';
import Logo from './logo.jsx';
import Navi from './navi.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

export default

class First extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section>
             <Header/>
             <section className='middle_section'>
                 <Navi/>
                 <Logo/>
             </section>
             <Footer/>
         </section>
     )
   }
 }