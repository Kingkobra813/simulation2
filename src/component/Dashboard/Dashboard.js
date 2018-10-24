import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import House from "../House/House";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    handleAddProperty = () => {

    }
    render() {
        return (
            <div>
                Dashboard
                <Link to="/wizard">
                    <button>Add New Prooperty</button>
                </Link>
                <House></House>
            </div>
        )

    }
}
export default Dashboard;