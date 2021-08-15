import axios from 'axios';
import React, { Component } from 'react';
import OneBeerContainer from '../OneBeer-Random/OneBeerContainer';

export class RandomBeer extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => {
            // console.log(response.data);
            this.setState({
                beer: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        if(this.state.beer === null) {
            return (<div>Loading...</div>)
        }

        return (
            <OneBeerContainer beer={this.state.beer}/>
        )
    }
}

export default RandomBeer

