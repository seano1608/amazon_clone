import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
};

export default App;

//ourdomain.com/ =>  home screen
//ourdomain.com/products => product list component
