import React from 'react'
import Category from './Category'
import beersPhoto from "../../assets/beers.png";
import newBeerPhoto from "../../assets/new-beer.png";
import randomBeerPhoto from "../../assets/random-beer.png";

const Home = () =>  {
    return (
        <div className="Home">
            <Category title="All Beers" picture={beersPhoto} link="/beers" />
            <Category title="Random Beer" picture={randomBeerPhoto} link="/random-beer" />
            <Category title="New Beer" picture={newBeerPhoto} link="/new-beer" />     
        </div>
    )
}

export default Home
