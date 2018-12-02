import React from 'react';
import ReactDOM from "react-dom";

import Navi from './navi.jsx';
import PDF from './pdf_form.jsx'

import style from "../css/style.css";

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
            id_born_number: "",

            error_message: [],

            agree_1: false,
            agree_2: false,
            agree_3: false,
            agree_4: "",
            agree_5: false,
            agree_6: false,
            agree_7: false,


            name_submit_person: "",
            surname_submit_person: "",
            phone_number_submit_person: "",
            id_born_number_submit_person: ""

        }
    }


    officeCity = (e) => {
        this.setState({
            office_city: e.target.value
        })
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
        this.setState({
            sex: e.target.value
        })
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

    agree_4 = (e) => {
        this.setState({
            agree_4: e.target.value
        })
    };

    agree_5 = () => {
        this.setState({
            agree_5: !this.state.agree_5
        })
    };

    agree_6 = () => {
        this.setState({
            agree_6: !this.state.agree_6
        })
    };

    agree_7 = () => {
        this.setState({
            agree_7: !this.state.agree_7
        })
    };

    formNameSubmitPerson = (e) => {
        this.setState({
            name_sumbit_person: e.target.value
        })
    };

    formSurnameSubmitPerson = (e) => {
        this.setState({
            surname_sumbit_person: e.target.value
        })
    };

    formPhoneNumberSubmitPerson = (e) => {
        this.setState({
            phone_number_submit_person: e.target.value
        })
    }

    formIdBornNumberSubmitPerson = (e) => {
        this.setState({
            id_born_numebr_submit_person: e.target.value
        })
    }


    test_sub = () => {
        return ReactDOM.render(<PDF name={this.state.name} surname={this.state.surname}/>, document.getElementById('app'));
    }


    submit = (e) => {
        let errors = [];

        e.preventDefault(e);

        if (this.state.name.length < 3 || !isNaN(Number(this.state.name))) {
            errors.push("Uzupełnij imię poprawnie ");
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

        this.setState({
            error_message: [...errors]
        })

        if (errors.length === 0) {

            return ReactDOM.render(<PDF name={this.state.name} surname={this.state.surname} street={this.state.street} street_number={this.state.street_number} city={this.state.city} post_code={this.state.post_code} phone_number={this.state.phone_number} id_born_number={this.state.id_born_number} agree_1={this.state.agree_1} agree_2={this.state.agree_2} agree_3={this.state.agree_3} agree_4={this.state.agree_4} agree_5={this.state.agree_5} agree_6={this.state.agree_6} agree_7={this.state.agree_7} office_city={this.state.office_city } sex={this.state.sex} name_submit_person={this.state.name_submit_person} surname_submit_person={this.state.surname_submit_person} phone_number_submit_person={this.state.phone_number_submit_person} id_born_number_submit_person={this.state.id_born_number_submit_person}/>, document.getElementById('app'));
        }

    };



    render() {


        return (
            <section className="body_patient_form">
                <Navi/>
                <section className="form_section">
                    <label>Wybierz placówkę: </label>
                    <select value={this.state.office_city} onChange={this.officeCity}>
                        <option>Warszawa Wilanów</option>
                        <option>Warszawa Centrum</option>
                        <option>Łódź</option>
                        <option>Kraków</option>
                        <option>Olsztyn</option>
                    </select>

                    <form onSubmit={this.submit} className='patient_form'>
                        <label>Dane osobowe</label><br/>
                        <input type="text" value={this.state.name} onChange={this.formName} placeholder="Wpisz Imię"/><br/>
                        <input type="text" value={this.state.surname} onChange={this.formSurname}
                               placeholder="Wpisz Nazwisko"/><br/>
                        <a>Wybierz płeć: </a>
                        <select value={this.state.sex} onChange={this.formSex}>
                            <option>Mężczyzna</option>
                            <option>Kobieta</option>
                        </select><br/>
                        <input type="text" value={this.state.id_born_number} onChange={this.formIdBornNumber}
                               placeholder="Wpisz PESEL"/><br/>
                        <label>Dane Adresowe Pacjenta</label><br/>
                        <input type="text" value={this.state.street} onChange={this.formStreet}
                               placeholder="Wpisz Ulicę"/><br/>
                        <input type="text" value={this.state.street_number} onChange={this.formStreetNumber}
                               placeholder="Wpisz Numer"/><br/>
                        <input type="text" value={this.state.city} onChange={this.formCity}
                               placeholder="Wpisz miasto"/><br/>
                        <input type="text" value={this.state.post_code} onChange={this.formPostCode}
                               placeholder="Wpisz kod pocztowy"/><br/>
                        <input type="text" value={this.state.phone_number} onChange={this.formPhoneNumber}
                               placeholder="Wpisz numer telefonu"/><br/>
                        <input type="text" value={this.state.email} onChange={this.formEmail}
                               placeholder="Wpisz adres email"/><br/>
                        <label>Zgody naprzetrzymywanie danych osobowych</label><br/>
                        <input onChange={this.agree_1} value={this.state.agree_1} type="checkbox"/><a>Zgoda na przetwarzanie
                        danych osobowych</a><br/>
                        <input onChange={this.agree_2} value={this.state.agree_2} type="checkbox"/><a>Zgoda na przekazywanie
                        danych osobowych</a><br/>
                        <input onChange={this.agree_3} value={this.state.agree_3} type="checkbox"/><a>Zgoda na konktakt w
                        celach marketingowych</a><br/>
                        <label>Zgoda na udostęnienie dokumentacji medycznej</label><br/>
                        <select onChange={this.agree_4} value={this.state.agree_4}>
                            <option>Nie udostępniam</option>
                            <option>Udostępniam</option>
                        </select><br/>
                        {this.state.agree_4 === "Udostępniam" ? <a>
                            <input type="text" value={this.state.name_submit_person} onChange={this.formNameSubmitPerson}
                                   placeholder="Wpisz Imię Osoby której udostępniasz dane"/><br/>
                            <input type="text" value={this.state.surname_submit_person}
                                   onChange={this.formSurnameSubmitPerson}
                                   placeholder="Wpisz Nazwisko osoby której udostępniasz dane"/><br/>
                            <input type="text" value={this.state.phone_number_submit_person}
                                   onChange={this.formPhoneNumberSubmitPerson} placeholder="Wpisz numer telefonu"/><br/>
                            <input type="text" value={this.state.id_born_number_submit_person}
                                   onChange={this.formIdBornNumberSubmitPerson}
                                   placeholder="Wpisz PESEL osoby której udostępnione są dane"/><br/>
                        </a> : <a></a>}<br/>
                        <input onChange={this.agree_5} value={this.state.agree_5} type="checkbox"/><a>Zgoda na
                        przeprowadzenie badania</a><br/>
                        <input onChange={this.agree_6} value={this.state.agree_6} type="checkbox"/><a>Zgoda na
                        przeprowadenie zabiegu</a><br/>
                        <input onChange={this.agree_7} value={this.state.agree_7} type="checkbox"/><a>Oświadczenie</a><br/>

                        <button type="submit" onSubmit={this.submit}>Generuj Kartę</button>
                    </form>
                    <h3>{this.state.error_message}</h3>
                </section>

                <button onClick={this.test_sub}>TEST TEST</button>
            </section>
        )
    }
}
