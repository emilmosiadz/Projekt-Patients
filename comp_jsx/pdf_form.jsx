import React from 'react';
import ReactDOM from "react-dom";

import props from './patient_Form.jsx';
import Img from 'react-image';
import logo from '../img/I.V.CLINIC_logo_poziom_RGB.png';


import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import styled from '@react-pdf/styled-components';




export default

class PDF extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            office_city: this.props.office_city,

            name: this.props.name,
            surname: this.props.surname,
            sex: this.props.sex,
            street: this.props.street,
            street_number: this.props.street_number,
            city: this.props.city,
            post_code: this.props.post_code,
            phone_number: this.props.phone_number,
            email: this.props.email,
            id_born_number: this.props.id_born_number,


            agree_1: this.props.agree_1,
            agree_2: this.props.agree_2,
            agree_3: this.props.agree_3,
            agree_4: this.props.agree_4,
            agree_5: this.props.agree_5,
            agree_6: this.props.agree_6,
            agree_7: this.props.agree_7,
            agree_8: this.props.agree_8,


            name_submit_person: this.props.name_submit_person,
            surname_submit_person: this.props.surname_submit_person,
            phone_number_submit_person: this.props.phone_number_submit_person,
            id_born_number_submit_person: this.props.id_born_number_submit_person,


            office_city_adress: this.props.office_city_adress,

            agree_1_text: "Wyrażam zgodę na przetwarzanie przez I.V. Clinic Sp. z o.o. moich danych osobowych, zawartych w niniejszym formularzu lub/i w innych przekazanych przeze mnie dokumentach, w celach związanych z udzielaniem świadczenia zdrowotnego mojej osobie. Administratorem danych osobowych jest I.V. Clinic Sp. z o.o. z siedzibą w Warszawie (02-972) przy ul. Abp. Józefa Teodorowicza 3/1. Dane osobowe mogą być udostępnione na rzecz innego podmiotu leczniczego biorącego udział w procesie udzielania świadczenia zdrowotnego (lista podmiotów w regulaminie placówki) oraz mogą być przekazane podmiotom upoważnionym na podstawie przepisów prawa. Przysługuje Tobie prawo dostępu do treści swoich danych oraz ich poprawiania. Podanie danych jest dobrowolne, ale niezbędne do realizacji ww. celu",
            agree_2_text: "Wyrażam zgodę na przetwarzanie przez I.V. Clinic Sp. z o.o. moich danych osobowych w zakresie: adresu e-mail, numeru telefonu; w celu informowania o umówionych wizytach w placówkach I.V. Clinic. Dane te mogą być udostępnione na rzecz innego podmiotu biorącego udział w procesie udzielania świadczenia zdrowotnego (lista podmiotów w regulaminie placówki). Administratorem danych osobowych jest I.V. Clinic Sp. z o.o. z siedzibą w Warszawie (02-972) przy ul. Abp. Józefa Teodorowicza 3/1.  Podanie danych jest dobrowolne, ale niezbędne do realizacji ww. celu.",
            agree_3_text: "Wyrażam zgodę na przetwarzanie przez I.V. Clinic Sp. z o.o. moich danych osobowych w zakresie: adres e-mail, numer telefonu; w szczególności kontaktowanie się ze mną przez telefon w celach marketingowych. Informujemy, iż administratorem danych osobowych jest I.V. Clinic Sp. z o.o. z siedzibą w Warszawie (02-972) przy ul. Abp. Józefa Teodorowicza 3/1. W przypadku wyrażenia przedmiotowej zgody, Twoje dane osobowe będą przetwarzane w celu kierowania do Ciebie informacji o charakterze marketingowym. Dane osobowe mogą być przekazywane podmiotom upoważnionym na podstawie przepisów prawa. Przysługuje Tobie prawo dostępu do treści swoich danych oraz ich poprawiania. Podanie danych jest dobrowolne, ale niezbędne do realizacji ww. celu.",
            agree_4_text: "Wyrażam zgodę na przetwarzanie przez I.V. Clinic Sp. z o.o. moich danych osobowych w zakresie: adres e-mail, numer telefonu, w celu przesyłania informacji handlowych drogą elektroniczną. Informujemy, iż administratorem danych osobowych jest I.V. Clinic Sp. z o.o. z siedzibą w Warszawie (02-972) przy ul. Abp. Józefa Teodorowicza 3/1. W przypadku wyrażenia przedmiotowej zgody, Twoje dane osobowe będą przetwarzane w celu kierowania do Ciebie informacji handlowych drogą elektroniczną. Dane osobowe mogą być przekazywane podmiotom upoważnionym na podstawie przepisów prawa. Przysługuje Tobie prawo dostępu do treści swoich danych oraz ich poprawiania. Podanie danych jest dobrowolne, ale niezbędne do realizacji ww. celu.",
            agree_5_text: "Zezwalam na przeprowadzenie badania / udzielenia świadczenia zdrowotnego w niniejszej placówce." +
            "Zgoda na przeprowadzenie badania / udzielenie świadczenia jest ważna do momentu jej odwołania udzielana i obowiązuje w  każdej  placówce I.V. Clinic Sp. z o.o., (na podstawie art. 14 ust. 2 pkt 3 oraz art. 26 ust. 1 ustawy z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz. U. 2016.186 t.j. z dnia 2016.02.16).",
            agree_6_text: "Do uzyskania informacji o udzielonych świadczeniach oraz do dokumentacji medycznej w wszystkich prawnie dopuszczonych formach upoważniam:",
            agree_7_text: "Oświadczam że, nie jestem sportowcem podlegającym pod przepisy antydopingowe tworzone przez Światową Organizację Antydopingową (WADA), Federacje Międzynarodowe poszczególnych dyscyplin sportowych oraz organizatorów większych imprez sportowych.",
            agree_8_text: "Wyrażam dobrowolną i w pełni świadomą zgodę na wykonanie zabiegu wkłucia do obwodowego naczynia żylnego oraz przetoczenia płynów infuzyjnych i leków. Po zapoznaniu mnie z podwyższonym ryzykiem i ewentualnymi dającymi się przewidzieć skutkami zabiegu wkłucia obwodowego, przetaczania płynów infuzyjnych oraz stosowania leków wg. wskazań jak i poza wskazaniami - pozarejstracyjnymi (“off label”), oświadczam, że wyrażam zgodę na jego wykonanie. Jednocześnie potwierdzam, że mogłem/am zadać wszelkie pytania dotyczące zabiegu i otrzymałem/am na nie odpowiedzi, które zrozumiałem/am. Istnieje możliwość, że zabieg może się nie udać przy pierwszej próbie z różnych przyczyn niezależnych od personelu. Przyczynami takimi są: niskie ciśnienie tętnicze, stany odwodnienia i obrzęków organizmu, słabe napięcie powłok skórnych, spożywanie alkoholu lub leków, otyłość, patologie w budowie naczyń krwionośnych oraz wady fabryczne sprzętu jednorazowego. W czasie oraz po wykonaniu zabiegu mogą wystąpić powikłania: ból utrzymujący się, pieczenie, uczucie dyskomfortu w miejscu założenia kaniuli, wylew podskórny krwi, omdlenie, zawroty głowy, nudności, mechaniczne uszkodzenia innych tkanek miękkich, zator naczynia żylnego, stany zapalne naczynia, zakażenia ogólnoustrojowe, chwilowy spadek lub wzrost ciśnienia tętniczego. Zgoda jest udzielana bezterminowo na każdą wizytę w podmiocie leczniczym. Oświadczam, iż treść oświadczenia jest dla mnie w pełni zrozumiała, składam je świadomie i dobrowolnie po dokładnej analizie jego treści.\n",

        }

    }



        render() {

            return <PDFViewer style={{width: '100%', height: '100vh'}}>
                <MyDocument
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
                agree_1_text={this.state.agree_1_text}
                agree_2_text={this.state.agree_2_text}
                agree_3_text={this.state.agree_3_text}
                agree_4_text={this.state.agree_4_text}
                agree_5_text={this.state.agree_5_text}
                agree_6_text={this.state.agree_6_text}
                agree_7_text={this.state.agree_7_text}
                agree_8_text={this.state.agree_8_text}/>
            </PDFViewer>
        }
}



            class MyDocument extends React.Component {
               constructor(props) {
               super(props);

               this.state = {
                   office_city: this.props.office_city,

                   name: this.props.name,
                   surname: this.props.surname,
                   sex: this.props.sex,
                   street: this.props.street,
                   street_number: this.props.street_number,
                   city: this.props.city,
                   post_code: this.props.post_code,
                   phone_number: this.props.phone_number,
                   email: this.props.email,
                   id_born_number: this.props.id_born_number,


                   agree_1: this.props.agree_1,
                   agree_2: this.props.agree_2,
                   agree_3: this.props.agree_3,
                   agree_4: this.props.agree_4,
                   agree_5: this.props.agree_5,
                   agree_6: this.props.agree_6,
                   agree_7: this.props.agree_7,
                   agree_8: this.props.agree_8,


                   name_submit_person: this.props.name_submit_person,
                   surname_submit_person: this.props.surname_submit_person,
                   phone_number_submit_person: this.props.phone_number_submit_person,
                   id_born_number_submit_person:this.props.id_born_number_submit_person,

                   office_city_adress: this.props.office_city_adress,

                   agree_1_text: this.props.agree_1_text,
                   agree_2_text: this.props.agree_2_text,
                   agree_3_text: this.props.agree_3_text,
                   agree_4_text: this.props.agree_4_text,
                   agree_5_text: this.props.agree_5_text,
                   agree_6_text: this.props.agree_6_text,
                   agree_7_text: this.props.agree_7_text,
                   agree_8_text: this.props.agree_8_text
               }
               }
               render(){
                 return (
                     <Document>
                         <Page size="A4" style={styles.body}>
                             <Img style={styles.image} src={logo}/>
                             <Text style={styles.header}>{this.state.office_city_adress}</Text>
                             <Text style={styles.header}>Numer księgi głównej: ...............................</Text>
                             <Text style={styles.title}>DANE I OŚWIADCZENIA PACJENTA (OPIEKUNA PRAWNEGO):</Text>
                             <Text style={styles.person}>
                                 Imię i nazwisko:  { this.state.name} {this.state.surname}
                             </Text>
                             <Text style={styles.person}>
                                 Adres zamieszkania: {this.state.street} {this.state.street_number} {this.state.post_code} {this.state.city}
                             </Text>
                             <Text style={styles.person}>
                                 PESEL: {this.state.id_born_number} | Płeć:  {this.state.sex}
                             </Text>
                             <Text style={styles.person}>
                                 Numer telefonu: {this.state.phone_number} | Adres email: {this.state.email}
                             </Text>
                             <Text style={styles.text}>
                                 Wyrażona przez Ciebie zgoda może zostać wycofana w każdej chwili. Jeśli wycofasz zgodę, dane przetwarzane przed jej wycofaniem, były przetwarzane zgodnie z prawem Jeśli nie chcesz, aby Twoje dane osobowe były przetwarzane w niżej wymienionych celach, skieruj swoje zgłoszenie na adres mailowy biuro@ivclinic.com.pl , lub do najbliższej placówki I.V. Clinic.
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_1 ? "[X]  " : "[_] "} {this.state.agree_1_text}
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_2 ? "[X]  " : "[_] "} {this.state.agree_2_text}
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_3 ? "[X]  " : "[_] "} {this.state.agree_3_text}
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_4 ? "[X]  " : "[_] "} {this.state.agree_4_text}
                             </Text>
                             <Text style={styles.signature}>
                                 Data i podpis:........................................
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_5 ? "[X]  " : "[_] "} {this.state.agree_5_text}
                             </Text>
                             <Text style={styles.signature}>
                                 Data i podpis:........................................
                             </Text>
                             <Text style={styles.text} break>
                                 {this.state.agree_6 ? "[X]  " : "[_] "} {this.state.agree_6_text}: Imię i nazwisko: {this.state.name_submit_person}  {this.state.surname_submit_person},  PESEL: {this.state.id_born_number_submit_person},  tel:  {this.state.phone_number_submit_person}
                             </Text>
                             <Text style={styles.signature}>
                                 Data i podpis:........................................
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_7 ? "[X]  " : "[_] "} {this.state.agree_7_text}
                             </Text>
                             <Text style={styles.signature}>
                                 Data i podpis:........................................
                             </Text>
                             <Text style={styles.text}>
                                 {this.state.agree_8 ? "[X]  " : "[_] "} {this.state.agree_8_text}
                             </Text>
                             <Text style={styles.signature}>
                                 Data i podpis:........................................
                             </Text>
                             <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                                 `${pageNumber} / ${totalPages}`
                             )} fixed />
                         </Page>
                     </Document>
                 )
               }
             }



// Font.register(
//     "https://fonts.googleapis.com/css?family=Alegreya+Sans",
//     { family: 'Alegreya Sans' },
// );

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        // fontFamily: 'Alegreya Sans',
        color: "black",
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        // fontFamily: 'Alegreya Sans',
        color: 'black',
    },
    person: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 5,
    },
    text: {
        margin: 5,
        fontSize: 10,
        textAlign: 'justify-all',
        paddingRight: 10,
        // textDecoration: 'bold',
        // fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
        height: "100px",
        width: "100px"
    },
    header: {
        fontSize: 10,
        marginBottom: 10,
        textAlign: 'right',
    },
    signature: {
        fontSize: 10,
        textAlign: 'right',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 8,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

