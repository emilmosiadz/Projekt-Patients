import React from 'react';
import Navi from './navi.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import docplaner_logo from '../img/logo-default.svg';

export default

class Calendarz extends React.Component {
    constructor() {
        super();

    }
    render(){
        return (
            <section>
                <Header/>
                <section className='middle_section'>
                    <Navi/>
                    <section className='section_docplaner'>
                        <button className='link_docplaner_btn'>
                            <a href='https://docplanner.znanylekarz.pl/#/'>Przejdź do kalendarza</a>
                        </button>
                        <div className='docplaner_logo'>
                            <a href='https://docplanner.znanylekarz.pl/#/'><img src={docplaner_logo}/></a>
                        </div>
                    </section>
                </section>
                <Footer/>
            </section>
        )
    }
}