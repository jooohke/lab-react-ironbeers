import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home'
import Beers from "./Components/BeersList/Beers";
import OneBeer from './Components/OneBeer-Random/OneBeer';
import RandomBeer from "./Components/OneBeer-Random/RandomBeer";
import BeerForm from "./Components/BeerForm/BeerForm"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route path="/beers/:id" component={OneBeer}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="new-beer" component={BeerForm}/>
      </Switch>
    </div>
  );
}

export default App;
