import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/common/Login';
import CreateContract from './components/contract/CreateContract';
import UploadContract from './components/contract/UploadContract';
import ContractDetails from './components/contract/ContractDetails';
import Notification from './components/notification/Notification';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create" component={CreateContract} />
        <Route exact path="/upload" component={UploadContract} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/contractdetails" component={ContractDetails} />
    </Switch>
);
