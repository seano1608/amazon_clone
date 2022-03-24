import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/products'>
        <Products/>
      </Route>
    </div>
  );
}

export default App;

//ourdomain.com/ =>  home screen
//ourdomain.com/products => product list component