import React from 'react';
import ReactDOM from "react-dom";

import Navi from './navi.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import PDF from './pdf_form.jsx'

import style from "../css/main.css";

import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';



export default

class Patient_Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            office_city: "",

            name: "",
            surname: "",
            sex: "",
            street: "",
            street_number: "",
            city: "",
            post_code: "",
            phone_number: "",
            email: "",
            id_born_number: "",

            error_message: [],

            agree_1: false,
            agree_2: false,
            agree_3: false,
            agree_4: false,
            agree_5: false,
            agree_6: "",
            agree_7: false,
            agree_8: false,


            name_submit_person: "",
            surname_submit_person: "",
            phone_number_submit_person: "",
            id_born_number_submit_person: "",

            office_city_adress:"",


        }
    }


    officeCity = (e) => {
        this.setState({
            office_city: e.target.value
        });

        if (e.target.value === "Warszawa Wilanów") {
            this.setState({
                office_city_adress: "I.V. CLINIC Warszawa Wilanów \n ul. Abp. Józefa Teodorowicza 3/1 \n 02-972 Warszawa"
            })
        }
        if (e.target.value === "Warszawa Centrum") {
            this.setState({
                office_city_adress: "I.V. CLINIC Warszawa Centrum \n ul. Pańska 96 lok. 203 \n 00-837 Warszawa"
            })
        }
        if (e.target.value === "Łódź") {
            this.setState({
                office_city_adress: "I.V. CLINIC Łódź \n ul. Siewna 15 \n 00-000 Łódź"
            })
        }
        if (e.target.value === "Kraków") {
            this.setState({
                office_city_adress: "I.V. CLINIC Kraków\n Aleja Kijowska 64/U2\n 30-074 Kraków"
            })
        }
        if (e.target.value === "Olsztyn") {
            this.setState({
                office_city_adress: "I.V. CLINIC Olsztyn\n ul. Leśna 12 \n00-000 Olsztyn"
            })
        }
    }

    formName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    formSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    };

    formSex = (e) => {
        if (e.target.value === "Wybierz"){
            this.setState({
                sex: false
            })
        }
        if (e.target.value === "Mężczyzna") {
            this.setState({
                sex: "Mężczyzna"
            })
        }
        if (e.target.value === "Kobieta") {
            this.setState({
                sex: "Kobieta"
            })
        }
    };

    formStreet = (e) => {
        this.setState({
            street: e.target.value
        })
    };

    formStreetNumber = (e) => {
        this.setState({
            street_number: e.target.value
        })
    };

    formCity = (e) => {
        this.setState({
            city: e.target.value
        })
    };

    formPostCode = (e) => {
        this.setState({
            post_code: e.target.value
        })
    };

    formPhoneNumber = (e) => {
        this.setState({
            phone_number: e.target.value
        })
    };

    formEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    formIdBornNumber = (e) => {
        this.setState({
            id_born_number: e.target.value
        })
    };

    agree_1 = () => {
        this.setState({
            agree_1: !this.state.agree_1
        })
    };

    agree_2 = () => {
        this.setState({
            agree_2: !this.state.agree_2
        })
    };

    agree_3 = () => {
        this.setState({
            agree_3: !this.state.agree_3
        })
    };

    agree_4 = () => {
        this.setState({
            agree_4: !this.state.agree_4
        })
    };

    agree_5 = () => {
        this.setState({
            agree_5: !this.state.agree_5
        })
    };

    agree_6 = (e) => {
        this.setState({
            agree_6: e.target.value
        })
    };

    agree_7 = () => {
        this.setState({
            agree_7: !this.state.agree_7
        })
    };

    agree_8 = () => {
        this.setState({
            agree_8: !this.state.agree_8
        })
    };

    formNameSubmitPerson = (e) => {
        this.setState({
            name_submit_person: e.target.value
        })
    };

    formSurnameSubmitPerson = (e) => {
        this.setState({
            surname_submit_person: e.target.value
        })
    };

    formPhoneNumberSubmitPerson = (e) => {
        this.setState({
            phone_number_submit_person: e.target.value
        })
    }

    formIdBornNumberSubmitPerson = (e) => {
        this.setState({
            id_born_number_submit_person: e.target.value
        })
    }

    submit = (e) => {
        let errors = [];

        e.preventDefault(e);

        if (this.state.office_city === "") {
            errors.push("Wybierz placówkę");
        }

        if (this.state.name.length < 3 || !isNaN(Number(this.state.name))) {
            errors.push("Uzupełnij imię poprawnie ");
        }

        if (!this.state.sex) {
            errors.push("Wybierz płeć");
        }

        if (this.state.surname.length < 3 || !isNaN(Number(this.state.surname))) {
            errors.push("Uzupełnij nazwisko poprawnie ");
        }

        if (this.state.street < 3 || this.state.street === "") {
            errors.push("Uzupełnij nazwę ulicy poprawnie ");
        }

        if (this.state.street_number < 1 || this.state.street_number === "") {
            errors.push("Uzupełnij numer ulicy poprawnie ");
        }

        if (this.state.city.length < 3) {
            errors.push("Uzupełnij miasto poprawnie ");
        }

        if (isNaN(this.state.post_code) || this.state.post_code === "") {
            errors.push("Uzupełnij kod pocztowy poprawnie ")
        }

        if (isNaN(Number(this.state.phone_number))) {
            errors.push("Uzupełnij numer telefonu poprawnie ");
        }

        if (this.state.id_born_number === "" || isNaN(this.state.id_born_number) || this.state.id_born_number.length !== 11) {
            errors.push("Uzupełnij PESEL poprawnie ");
        }

        if (!this.state.agree_1) {
            errors.push("Zgoda 1 jest obowiązkowa ")
        }

        if (!this.state.agree_2) {
            errors.push("Zgoda 2 jest obowiązkowa ")
        }

        if (this.state.agree_6 === "Udostępniam"){
            if (this.state.name_submit_person.length < 3 || this.state.surname_submit_person.length < 3 || this.state.id_born_number_submit_person.length !== 11 || isNaN(this.state.id_born_number_submit_person)) {
            errors.push("Uzupełnij poprawnie dane osoby której udostępniane są dane")
            }
        }

        this.setState({
            error_message: [...errors]
        })

        if (errors.length === 0) {

            return ReactDOM.render(<PDF
                name={this.state.name}
                surname={this.state.surname}
                street={this.state.street}
                street_number={this.state.street_number}
                city={this.state.city}
                post_code={this.state.post_code}
                phone_number={this.state.phone_number}
                email={this.state.email}
                id_born_number={this.state.id_born_number}
                agree_1={this.state.agree_1}
                agree_2={this.state.agree_2}
                agree_3={this.state.agree_3}
                agree_4={this.state.agree_4}
                agree_5={this.state.agree_5}
                agree_6={this.state.agree_6}
                agree_7={this.state.agree_7}
                agree_8={this.state.agree_8}
                office_city={this.state.office_city}
                sex={this.state.sex}
                name_submit_person={this.state.name_submit_person}
                surname_submit_person={this.state.surname_submit_person}
                phone_number_submit_person={this.state.phone_number_submit_person}
                id_born_number_submit_person={this.state.id_born_number_submit_person}
                office_city_adress={this.state.office_city_adress}
            />, document.getElementById('app'));
        }

    };

    render() {
        return (
            <>
                <Header/>
                <section className="middle_section">
                    <Navi/>
                    <section className='form_section_patient'>
                        <form onSubmit={this.submit} className='patient_form'>
                            <div className="form_div_1">
                                <label className='form_label'><h2>Wybierz placówkę:</h2></label><br/>
                                <select value={this.state.office_city} onChange={this.officeCity}>
                                    <option value="">Wybierz</option>
                                    <option value="Warszawa Wilanów">Warszawa Wilanów</option>
                                    <option value="Warszawa Centrum">Warszawa Centrum</option>
                                    <option value="Łódź">Łódź</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Olsztyn">Olsztyn</option>
                                </select>
                            </div>
                            <div className="form_div_2">
                                <label className='form_label'><h2>Dane osobowe</h2></label><br/>
                            <a>Imię pacjenta: </a><br/><input className="input_type_text" type="text" value={this.state.name} onChange={this.formName} placeholder="Wpisz Imię"/><br/>
                            <a>Nazwisko pacjenta: </a><br/><input className="input_type_text" type="text" value={this.state.surname} onChange={this.formSurname} placeholder="Wpisz Nazwisko"/><br/>
                            <a>Wybierz płeć: </a><br/>
                            <select value={this.state.sex} onChange={this.formSex}>
                                <option>Wybierz</option>
                                <option value="Mężczyzna">Mężczyzna</option>
                                <option value="Kobieta">Kobieta</option>
                            </select><br/>
                            <a>Numer PESEL: </a><br/><input className="input_type_text" type="text" value={this.state.id_born_number} onChange={this.formIdBornNumber} placeholder="Wpisz PESEL"/><br/>
                                <label className='form_label'><h2>Dane Adresowe Pacjenta</h2></label><br/>
                            <a>Nazwa ulicy: </a><br/><input className="input_type_text" type="text" value={this.state.street} onChange={this.formStreet} placeholder="Wpisz Ulicę"/><br/>
                            <a>Numer domu:</a><br/><input className="input_type_text" type="text" value={this.state.street_number} onChange={this.formStreetNumber} placeholder="Wpisz Numer"/><br/>
                            <a>Miasto: </a><br/><input className="input_type_text" type="text" value={this.state.city} onChange={this.formCity} placeholder="Wpisz miasto"/><br/>
                            <a>Kod pocztowy: </a><br/><input className="input_type_text" type="text" value={this.state.post_code} onChange={this.formPostCode} placeholder="Wpisz kod pocztowy"/><br/>
                                <a>Numer telefonu: </a><br/><input className="input_type_text" type="text" value={this.state.phone_number} onChange={this.formPhoneNumber} placeholder="Wpisz numer telefonu"/><br/>
                                <a>Adres Email: </a><br/><input className="input_type_text" type="text" value={this.state.email} onChange={this.formEmail} placeholder="Wpisz adres email"/>
                        </div>
                            <div className="form_div_3">

                                <label className='form_label'><h2>Zgody i oświadczenia</h2></label><br/>

                            <a><input onChange={this.agree_1} value={this.state.agree_1} type="checkbox"/>Zgoda na przechowywanie i przetwarzenie danych osobowych przez I.V. CLINIC</a><br/>

                            <a><input onChange={this.agree_2} value={this.state.agree_2} type="checkbox"/>Zgoda na informowanie o wizytach w I.V. CLINIC</a><br/>

                            <a><input onChange={this.agree_3} value={this.state.agree_3} type="checkbox"/>Zgoda na konktakt w celach marketingowych za pośrednictwem telefonu</a><br/>

                            <a><input onChange={this.agree_4} value={this.state.agree_4} type="checkbox"/>Zgoda na konktakt w
                            celach marketingowych za pośrednictwem poczty elektronicznej</a><br/>

                            <a><input onChange={this.agree_5} value={this.state.agree_5} type="checkbox"/>Zgoda na
                            przeprowadzenie badania</a><br/>

                            <label>Zgoda na udostęnienie dokumentacji medycznej i informacji o stanie zdrowia</label><br/>

                            <select onChange={this.agree_6} value={this.state.agree_6}>
                                <option>Nie udostępniam</option>
                                <option>Udostępniam</option>
                            </select>

                            {this.state.agree_6 === "Udostępniam" ? <p>
                                <a>Imię: </a><input className="input_type_text" type="text" value={this.state.name_submit_person} onChange={this.formNameSubmitPerson} placeholder="Wpisz Imię Osoby której udostępniasz dane"/><br/>
                                <a>Nazwisko: </a><input className="input_type_text" type="text" value={this.state.surname_submit_person} onChange={this.formSurnameSubmitPerson} placeholder="Wpisz Nazwisko osoby której udostępniasz dane"/><br/>
                                <a>Numer telefonu: </a><input className="input_type_text" type="text" value={this.state.phone_number_submit_person} onChange={this.formPhoneNumberSubmitPerson} placeholder="Wpisz numer telefonu"/><br/>
                                <a>PESEL: </a><input className="input_type_text" type="text" value={this.state.id_born_number_submit_person} onChange={this.formIdBornNumberSubmitPerson} placeholder="Wpisz PESEL osoby której udostępnione są dane"/><br/></p> : null}<br/>
                            <a><input onChange={this.agree_7} value={this.state.agree_7} type="checkbox"/>Oświadczenie że pacjent nie jest zawodowym sportowcem</a><br/>
                            <a><input onChange={this.agree_8} value={this.state.agree_8} type="checkbox"/>Zapoznanie się ze skutkami terapii dożylnych</a>
                        </div>
                            <div className="form_div_4">
                            <button type="submit" onSubmit={this.submit}>Generuj Kartę</button>
                        </div>
                            <div className='form_div_5'>
                        {this.state.error_message.map((e,i)=>{return <h5 style={{color: "red", fontSize: "14px"}} key={i}>{e}</h5>})}
                            </div>
                        </form>
                    </section>
                </section>
                <Footer/>
            </>
        )
    }
}
