import React, { Component } from 'react';
import axios from 'axios'
import BeerCard from './BeerCard';

class Beers extends Component {
    state = {
        beers: []
    };

    componentDidMount() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response.data);
            this.setState({
                beers: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="Beers">
                <ul className="beers-list">
                {this.state.beers.map(beer => {
                    return(
                        <li key={beer._id}>
                            <BeerCard beer={beer}/>
                        </li>
                    )
                })}
                </ul>
                
            </div>
        )
    }
}

export default Beers
