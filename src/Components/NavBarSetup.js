import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Gilard from '../Pages/Gilard';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import NavBar from './NavBar';
import Footer from './Footer';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import ContactUs from '../Pages/ContactUs';
import ProductTB from '../Pages/ProductTB';
import AdminLogin from '../Pages/AdminLogin';
import AdminHome from '../Pages/AdminHome';

const NavBarSetup = () => {
    return ( 
        <Router>
            <NavBar />
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route exact path = "/Gilard">
                    <Gilard />
                </Route>
                <Route exact path = "/ToggleSwitch/:name" children = {<Product />}>
                </Route>
                <Route exact path = "/TerminalBlocks/:name" children = {<ProductTB />}>
                </Route>
                <Route exact path = "/Cart">
                    <Cart />
                </Route>
                <Route exact path = "/Admin">
                    <AdminLogin />
                </Route>
                <Route exact path = "/Admin/Home">
                    <AdminHome />
                </Route>
                <Route exact path = "/ContactUs">
                    <ContactUs />
                </Route>
                <Route exact path = "*">
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
     );
}
 
export default NavBarSetup;