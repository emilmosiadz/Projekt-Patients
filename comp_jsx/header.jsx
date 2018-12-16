import React from 'react';
import logo from '../img/I.V.CLINIC_logo_poziom_RGB.png';


export default


class Header extends React.Component {
   constructor() {
   super();
       this.state = {
           date: new Date()
       }
   }
   render(){
     return (
         <header className="header">
             <div className='header_img'>
                 <a href="http://www.ivclinic.com.pl" target="_blank" >
                     <img src={logo}/>
                 </a>
             </div>
             <div className="header_div">
                 <Clock time={this.state.date} date={this.state.date.toLocaleDateString()}/>
             </div>
         </header>

     )
   }

    componentDidMount() {
        this.int = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
 }

class Clock extends React.Component {
    constructor() {
        super();

    }
    render(){
        return (
            <>
                <h2>{this.props.time.toLocaleTimeString()} </h2>
                <h2>{this.props.date}</h2>
            </>

        )
    }
}