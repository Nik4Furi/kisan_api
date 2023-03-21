import React from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//-------------- Components -------------X
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// ------------ Pages -------------X
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';

import Admin from './pages/Admin/index'
import Merchants from './pages/Merchants/index'
import MerchantsAdd from './pages/Merchants/AddContents'

import Farmers from './pages/Farmers/index'
import Landlords from './pages/Landlords/index'


function App() {

  return (
    <>
        <Router>
          {/* Navbar Component  */}
          <Navbar />

          <Switch>
            {/* Home Component  */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* Register Component  */}
            <Route exact path="/register">
              <Register />
            </Route>

            {/* Login Component  */}
            <Route exact path="/login">
              <Login />
            </Route>

            {/* Admin Component  */}
            <Route exact path="/admin">
              <Admin />
            </Route>

            <Route exact path="/farmers">
              <Farmers />
            </Route>

            <Route exact path="/merchants">
              <Merchants />
            </Route>

            <Route exact path="/merchants/add">
              <MerchantsAdd />
            </Route>

            <Route exact path="/landlords">
              <Landlords />
            </Route>

          </Switch>



          {/* Footer Component  */}
          <Footer />
        </Router>
    </>
  )
}

export default App
