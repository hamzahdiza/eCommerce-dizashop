import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import MainApp from "../MainApp";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";
import CartPage from "../page/CartPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<MainApp />}>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />}>
              <Route path=":id" element={<CartPage />} />
              <Route path="" element={<CartPage />} />
            </Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
