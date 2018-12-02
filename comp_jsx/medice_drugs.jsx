import React from 'react';
import {db} from '../configFirebase/firebase';
import Navi from "./navi.jsx";

export default

class Medicine_Drugs extends React.Component {
        constructor() {
            super();

            this.state = {
                medic_drugs: [],
            }

        }
        render(){

            if (!this.state.medic_drugs.length) {
                return <><Navi/><h1>Ładuje....</h1></>
            }

            let list = this.state.medic_drugs.map((e,i) => {
                return <table>
                    <tr key={i}>
                        <td>{e.api}</td>
                        <h4>Interakcja z:</h4>
                        <td>{e.interaction}</td>
                    </tr>
                </table>
            })

            return (


                <>
                    <Navi/>
                    <section>
                        <div>
                            {list}
                        </div>
                    </section>
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
