import React from 'react';
import {db} from '../configFirebase/firebase';
import Navi from "./navi.jsx";
import Img from 'react-image';
import Logo from './logo.jsx'

import Header from './header.jsx';
import Footer from "./footer.jsx";
import ReactDOM from "react-dom";

export default

class Medicine_Drugs extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            medic_drugs: [],

            newDrugName: "",
            newDrugAPI: '',
            newDrugDescription: '',
            newDosage: '',
            newInteractions: '',
            newInjunctions: '',
            newSideEffects: '',

            addDrug: false,

            name_drug_show: '',
            drug_API: '',
            drug_description: '',
            drug_dosage: '',
            drug_interactions: '',
            drug_injunctions: '',
            drug_side_effects: '',

        }

    }

    showDrug = (e) => {

        let selected = this.state.medic_drugs.find(el => {
            return el.name_drug === e.target.value
        });

        this.setState({
            name_drug_show: selected.name_drug,
            drug_API: selected.API,
            drug_description: selected.contraindications,
            drug_dosage: selected.dosage,
            drug_interactions: selected.interactions,
            drug_injunctions: selected.injunctions,
            drug_side_effects: selected.side_effects,
        })

    }

    addDrug = () => {
        this.setState({
            addDrug: !this.state.addDrug
        })
    }

    addDrugToFirebase = (e) => {
        e.preventDefault();
        let errors = [];

        let {newDrugName, newDrugAPI, newDrugDescription, newDosage, newInteractions, newInjunctions, newSideEffects} = this.state;

        let newDrug = {
            name_drug: newDrugName,
            API: newDrugAPI,
            contraindications: newDrugDescription,
            injunctions: newInjunctions,
            interactions: newInteractions,
            dosage: newDosage,
            side_effects: newSideEffects
        };


        if (newDrugName === "" || newDrugAPI === "" || newDrugDescription === "" || newDosage === "" || newInteractions === "" || newInjunctions === "" || newSideEffects === "") {
                    errors.push(alert("Uzupełnij wszystkie pola"));
                }
        if(errors.length === 0) {
            this.setState({
                medic_drugs: [...this.state.medic_drugs, newDrug]
            }, () => {
                db.collection('medic_drugs').add(newDrug),
                    this.setState({
                        newDrugName: '',
                        newDrugAPI: '',
                        newDrugDescription: '',
                        newDosage: '',
                        newInteractions: '',
                        newInjunctions: '',
                        newSideEffects: ''
                    })

            })
        }
    }


    newDrugName = (e) => {
        this.setState({
            newDrugName: e.currentTarget.value
        })
    };

    newDrugAPI = (e) => {
        this.setState({
            newDrugAPI: e.currentTarget.value
        })
    };

    newDrugDescription = (e) => {
        this.setState({
            newDrugDescription: e.currentTarget.value
        })
    };

    newDosage = (e) => {
        this.setState({
            newDosage: e.currentTarget.value
        })
    };

    newInteractions = (e) => {
        this.setState({
            newInteractions: e.currentTarget.value
        })
    };

    newInjunctions = (e) => {
        this.setState({
            newInjunctions: e.currentTarget.value
        })
    };

    newSideEffects = (e) => {
        this.setState({
            newSideEffects: e.currentTarget.value
        })
    };


    render() {

        if (!this.state.medic_drugs.length) {
            return <>
                <Header/>
                <section className='middle_section'>
                    <Navi/>
                    <Logo/>
                </section>
                <Footer/></>
        }

        const fireBaseDrug = this.state.medic_drugs.map((e, i) => {
            return <option key={i}
                           value={e.name_drug}
            >{e.name_drug}</option>
        })


        return (
            <>
                <Header/>
                <section className="middle_section">
                    <Navi/>

                    <section className='section_drug'>

                        <section className='section_drug_firebase'>
                            <h2 className='h2_choose_drug'>Wybierz lek:</h2>
                            <select value={this.state.name_drug} onChange={this.showDrug} className='select_drug'>
                                <option>Wybierz Lek Do Wyświetlenia</option>
                                {fireBaseDrug}
                            </select>
                        </section>

                        <section className="section_show_drug">{this.state.name_drug_show ?
                            <div><label>Nazwa Leku: {this.state.name_drug_show}</label>
                                <h2>Susbtancja Aktywna</h2>
                                <a>{this.state.drug_API}</a>
                                <h2>Opis Leku</h2>
                                <a>{this.state.drug_description}</a>
                                <h2>Dawkowanie</h2>
                                <a>{this.state.drug_dosage}</a>
                                <h2>Interakcje</h2>
                                <a>{this.state.drug_interactions}</a>
                                <h2>Przeciwskazania</h2>
                                <a>{this.state.drug_injunctions}</a>
                                <h2>Efekty uboczne</h2>
                                <a>{this.state.drug_side_effects}</a>
                            </div> : null}
                        </section>



                        <section className="section_new_drug">
                            <div>
                                <button htmlFor="" value={this.state.addDrug}
                                        onClick={this.addDrug}>{this.state.addDrug === false ? "Dodaj nowy lek" : "Zamknij formularz"}</button>
                            </div>
                            {this.state.addDrug === true ? <form onSubmit={this.addDrugToFirebase} action="">
                                <label htmlFor=''>Nazwa Leku Producenta</label>
                                <input value={this.state.newDrugName} type="text" onChange={this.newDrugName}/><br/>

                                <label htmlFor="">Nazwa substancji aktywnej/ych</label>
                                <input value={this.state.newDrugAPI} type='text' onChange={this.newDrugAPI}/><br/>

                                <label htmlFor=''>Opis działania i wskazań</label>
                                <textarea value={this.state.newDrugDescription} onChange={this.newDrugDescription}></textarea><br/>

                                <label htmlFor=''>Dawkowanie</label>
                                <textarea value={this.state.newDosage} onChange={this.newDosage}></textarea><br/>

                                <label htmlFor=''>Interakcje</label>
                                <textarea value={this.state.newInteractions} onChange={this.newInteractions}></textarea><br/>

                                <label htmlFor=''>Przeciwskazania</label>
                                <textarea value={this.state.newInjunctions} onChange={this.newInjunctions}></textarea><br/>

                                <label htmlFor=''>Efekty uboczne</label>
                                <textarea value={this.state.newSideEffects} onChange={this.newSideEffects}></textarea><br/>
                                <button type="submit">Opublikuj</button>
                            </form> : null}
                        </section>

                    </section>
                </section>
                <Footer/>
            </>
        )
    }


    componentDidMount() {
        db.collection('medic_drugs').get().then((snap) => {
            snap.docs.forEach((e) => {

                let drugs = e.data();

                this.setState({
                    medic_drugs: [
                        ...this.state.medic_drugs,
                        drugs
                    ]
                })
            })
        })
    }


}

