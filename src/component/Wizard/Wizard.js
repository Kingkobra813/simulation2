import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    };

    handleAddyChange = e => {
        this.setState({ address: e.target.value })
    };

    handleCityChange = e => {
        this.setState({ city: e.target.value })
    };

    handleStateChange = e => {
        this.setState({ state: e.target.value })
    };

    handleZipChange = e => {
        this.setState({ zipcode: e.target.value })
    };

    render() {
        return (
            <div>
                <p>Add New Listing</p>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <p>Property Name</p>
                <input onChange={this.handleNameChange}></input>
                <p>Address</p>
                <input onChange={this.handleAddyChange}></input>
                <p>City</p>
                <input onChange={this.handleCityChange}></input>
                <p>State</p>
                <input onChange={this.handleStateChange}></input>
                <p>Zip</p>
                <input onChange={this.handleZipChange}></input>
            </div>
        )

    }
}
export default Wizard;