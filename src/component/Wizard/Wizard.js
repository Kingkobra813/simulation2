import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const BASE_URL = "http://localhost:3005";

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

    handleAddHome = () => {
        axios
            .post(BASE_URL + "/api/home", {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            })
            .then(response => {
                this.setState({
                    house: response.data
                })
            })
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
        this.setState({ zip: e.target.value })
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
                <Link to="/">
                    <button onClick={this.handleAddHome}>Complete</button>
                </Link>
            </div>
        )

    }
}
export default Wizard;