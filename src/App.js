import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductsDetails from "./components/ProductsDetails";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='home' />
          </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductsDetails/>
        </Route>
        </Switch>
        
      </main>
    </div>
  );
};

export default App;

//ourdomain.com/ =>  home screen
//ourdomain.com/products => product list component
