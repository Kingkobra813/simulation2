import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            house: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }


    render() {
        return (
            <div>
                <p>Add New Listing</p>
                {/* leave the cancel button in the wizard */}
                <Link to="/" >
                    <button>Cancel</button>
                </Link>
                <Route path="/wizard/step1" component={Step1} />
                <Route path="/wizard/step2" component={Step2} />
                <Route path="/wizard/step3" component={Step3} />
            </div>
        )

    }
}
export default Wizard;