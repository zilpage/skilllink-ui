import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from './route/main/home'
import AboutUs from './route/main/aboutus'
import Contactus from './route/main/contactus'
import Login from './route/auth/login'
import Signup from './route/auth/signup'
import CampaignList from './route/admin/campaign_list'
import CampaignDetail from './route/admin/campaign_detail';
import Dashboard from './route/admin/dashboard'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={Contactus} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/campaign/list" exact component={CampaignList} />
          <Route path="/campaign/detail" exact component={CampaignDetail} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
