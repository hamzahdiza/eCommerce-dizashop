import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import MainApp from "../MainApp";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";
import CartPage from "../page/CartPage";
import LoginPage from "../page/LoginPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<MainApp />}>
            <Route path="/login" element={<LoginPage />} />
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
