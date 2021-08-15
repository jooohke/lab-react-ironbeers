import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class BeerCard extends Component {
    render() {
        return (
            <div className="BeerCard">
                <div className="img-container">
                    <img src={this.props.beer.image_url} alt={this.props.beer.name} />
                </div>
                <div>
                    <h3><Link to={`/beers/${this.props.beer._id}`}>{this.props.beer.name}</Link></h3>
                    <p>{this.props.beer.tagline}</p>
                    <p><strong>Contributed by: </strong>{this.props.beer.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default BeerCard
