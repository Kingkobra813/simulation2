import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import { updateMonthMort, updateDesired } from "../../ducks/reducer";

const BASE_URL = "http://localhost:3005";

class Step3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            house: [],
            recommendedRent: '',
            monthMorAmount: '',
            desiredMonthRent: '',
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


    handleMorAmount = e => {
        this.setState({ MonthMorAmount: e.target.value })
    }

    handleDesiredRent = e => {
        this.setState({ DesiredMonthRent: e.target.value })
    }

    handlePreviousStep = () => {
        this.props.history.push("/wizard/step2")
    }

    handleComplete = () => {

        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <p>Recommended Rent: ${this.recommendedRent}</p>
                <p>Monthly Mortgage Amount</p>
                <input onChange={this.handleMorAmount}></input>
                <p>Desired Monthly Rent</p>
                <input onChange={this.handleDesiredRent}></input>

                <button onClick={this.handlePreviousStep}>Previous Step</button>

                <Link to="/">
                    <button onClick={this.handleAddHome}>Complete</button>
                </Link>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { monthMorAmount, desiredMonthRent } = state
    return {
        monthMorAmount,
        desiredMonthRent
    }
}


export default connect(mapStateToProps, { updateMonthMort, updateDesired })(Step3)