import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import MainApp from "../MainApp";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<MainApp />}>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
