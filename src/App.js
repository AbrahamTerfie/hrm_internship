import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';


import Home from './Pages/Home'
import Payroll from './Pages/Payroll';
import Employee from './Pages/Employee';
import SignupLogin from './Pages/SignupLogin';

export default function App() {
  return (
    <div>

      <Switch>
        <Route path="/" component={SignupLogin} exact />
        <Route path="/home" component={Home} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/employee" component={Employee} />
        <Route component={Error}/>



      </Switch>
    </div>
      )
}
