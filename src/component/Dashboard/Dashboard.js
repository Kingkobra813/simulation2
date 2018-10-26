import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import House from "../House/House";

const BASE_URL = "http://localhost:3005";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houseList: [],
        }
    }

    componentDidMount() {
        axios.get(BASE_URL + '/api/houses')
            .then(response => {
                //console.log(response.data)
                this.setState({
                    houseList: response.data
                })
            })
    }

    render() {

        const housesToRender = this.state.houseList.map((house, index) => {
            //console.log('the id', index)
            return (
                <div key={index}>
                    <House houseList={house} />
                </div>
            )
        })

        return (
            <div>
                Dashboard
                <Link to="/wizard">
                    <button>Add New Prooperty</button>
                </Link>
                {housesToRender}
            </div>
        )

    }
}
export default Dashboard;