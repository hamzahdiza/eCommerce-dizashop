import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import MainApp from "../MainApp";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";
import CartPage from "../page/CartPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import ProfilePage from "../page/ProfilePage";
import ShippingPage from "../page/ShippingPage";
import PaymentPage from "../page/PaymentPage";
import PlaceOrderPage from "../page/PlaceOrderPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<MainApp />}>
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />}>
              <Route path=":id" element={<CartPage />} />
              <Route path="" element={<CartPage />} />
            </Route>
            <Route path="/" element={<HomePage />} exact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
