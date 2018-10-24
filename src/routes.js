import React from 'react';

import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Wizard from "./component/Wizard/Wizard";


export default (
    <Switch>
        <Dashboard path="/" exact></Dashboard>
        <Wizard path="/wizard"></Wizard>
    </Switch>
)
