import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Banner from "./components/Banner";
import CheckoutAd from "./components/CheckoutAd";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingBasket from "./components/ShoppingBasket";
import Login from "./components/Login";

function App() {
    return (


        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={
                    <React.Fragment>
                        <Banner />
                        <ProductList />
                    </React.Fragment>
                } />
                <Route exact path="/Checkout" element={
                    <React.Fragment>
                        <CheckoutAd />
                        <ShoppingBasket />
                    </React.Fragment>
                } />
                <Route exact path='/login' element={
                   <Login />  
                } />
            </Routes>
        </Router>
       
    );
}

export default App;