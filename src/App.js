import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductsDetails from "./components/ProductsDetails";
import SignIn from "./components/SignIn";
import Orders from "./components/Orders";
import Prime from "./components/Prime";
import Basket from "./components/Basket";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { useEffect } from "react";
import AuthContext from "./context/authContext";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductsDetails />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/prime">
            <Prime />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

//ourdomain.com/ =>  home screen
//ourdomain.com/products => product list component
