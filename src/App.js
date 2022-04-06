import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
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
import { useEffect, useContext } from "react";
import ShoppingContext from "./context/shopping/shoppingContext";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51HKawPFuQpMTR1i87nXZqCo1I3bQRxAgojMbuDIGpjcuqKugb7u0lSOABsqWqulDNdhjKj2D4p2wawf30lU3p2tm003xhxTeNU"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
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
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
