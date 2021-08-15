import React, { Component } from 'react';
import axios from 'axios'
import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

class Beers extends Component {
    state = {
        beers: [],
        searchValue: "",
    };

    componentDidMount() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            // console.log(response.data);
            this.setState({
                beers: response.data
            })
        })
        .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.searchValue !== prevState.searchValue) {
            axios
            .get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + this.state.searchValue)
            .then((response) => {
                console.log(response)
                this.setState({
                    beers: response.data
                })
            })
            .catch(error => console.log(error))
        }
        
    }

    handleChange = (event) => {
        this.setState({ searchValue : event.target.value});
    };

    render() {
        return (
            <div className="Beers">

                <SearchBar 
                value = {this.state.searchValue}
                onChange = {this.handleChange}
                />

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
