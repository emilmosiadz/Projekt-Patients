import React from 'react';
import ReactDOM from "react-dom";

import props from './patient_Form.jsx'

import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';




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
       id_born_number: this.props.id_born_number,


       agree_1: this.props.agree_1,
       agree_2: this.props.agree_2,
       agree_3: this.props.agree_3,
       agree_4: this.props.agree_4,
       agree_5: this.props.agree_5,
       agree_6: this.props.agree_6,
       agree_7: this.props.agree_7,


       name_submit_person: this.props.name_submit_person,
       surname_submit_person: this.props.surname_submit_person,
       phone_number_submit_person: this.props.phone_number_submit_person,
       id_born_number_submit_person:this.props.id_born_number_submit_person
   }
   }
   render(){
     return <PDFViewer><MyDocument
         name={this.state.name}
         surname={this.state.surname}
         street={this.state.street}
         street_number={this.state.street_number}
         city={this.state.city}
         post_code={this.state.post_code}
         phone_number={this.state.phone_number}
         id_born_number={this.state.id_born_number}
         agree_1={this.state.agree_1}
         agree_2={this.state.agree_2}
         agree_3={this.state.agree_3}
         agree_4={this.state.agree_4}
         agree_5={this.state.agree_5}
         agree_6={this.state.agree_6}
         agree_7={this.state.agree_7}
         office_city={this.state.office_city }
         sex={this.state.sex}
         name_submit_person={this.state.name_submit_person}
         surname_submit_person={this.state.surname_submit_person}
         phone_number_submit_person={this.state.phone_number_submit_person}
         id_born_number_submit_person={this.state.id_born_number_submit_person}/>
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
                   id_born_number: this.props.id_born_number,


                   agree_1: this.props.agree_1,
                   agree_2: this.props.agree_2,
                   agree_3: this.props.agree_3,
                   agree_4: this.props.agree_4,
                   agree_5: this.props.agree_5,
                   agree_6: this.props.agree_6,
                   agree_7: this.props.agree_7,


                   name_submit_person: this.props.name_submit_person,
                   surname_submit_person: this.props.surname_submit_person,
                   phone_number_submit_person: this.props.phone_number_submit_person,
                   id_born_number_submit_person:this.props.id_born_number_submit_person
               }
               }
               render(){
                 return (
                     <Document>
                         <Page size="A4" style={styles.page}>
                             <View style={styles.section}>
                                 <Text>{this.state.name}</Text>
                             </View>
                             <View style={styles.section}>
                                 <Text>{this.state.surname}</Text>
                             </View>
                             <View style={styles.section}>
                                 <Text>{this.state.street} {this.state.street_number}</Text>
                             </View>
                             <View style={styles.section}>
                                 <Text>{this.state.sex}</Text>
                             </View>
                             <View style={styles.section}>
                                 <Text>{this.state.id_born_number}</Text>
                             </View>
                         </Page>
                     </Document>

                 )
               }
             }



const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});