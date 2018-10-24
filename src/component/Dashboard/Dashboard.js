import React, { Component } from "react";
import axios from "axios";
import House from "../House/House";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Dashboard
                <House></House>
            </div>
        )

    }
}
export default Dashboard;