import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";
import { updateName, updateAddress, updateCity, updateState, updateZip } from "../../ducks/reducer";

const BASE_URL = "http://localhost:3005";

class Step1 extends Component {
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

    handleNextStep = () => {
        this.props.updateName(this.state.name)
        this.props.updateAddress(this.state.address)
        this.props.updateCity(this.state.city)
        this.props.updateState(this.state.state)
        this.props.updateZip(this.state.zip)
        this.props.history.push("/wizard/step2")
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <p>Add New Listing</p>
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

                <button onClick={this.handleNextStep}>Next Step</button>

            </div>
        )

    }

}

function mapStateToProps(state) {
    const { name, address, city, state: st, zip } = state

    return {
        name,
        address,
        city,
        state: st,
        zip
    }
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(Step1);