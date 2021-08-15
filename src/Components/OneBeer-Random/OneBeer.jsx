import axios from 'axios';
import React, { Component } from 'react';
import OneBeerContainer from './OneBeerContainer';

export class OneBeer extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.match.params.id)
        .then((response) => {
            this.setState({
                beer: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        if(this.state.beer === null) {
            return( <div>Loading...</div> )
        }

        return (
            <OneBeerContainer beer={this.state.beer}/>
        )
    }
}

export default OneBeer
