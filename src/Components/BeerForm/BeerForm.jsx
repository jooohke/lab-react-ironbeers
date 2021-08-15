import React, { Component } from 'react';
import FormField from './FormField';
import axios from 'axios'

export class BeerForm extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios 
        .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
        .then((response) => {
            this.props.history.push("/beers")
        })
        .catch(error => console.log(error))
    };

    render() {
        return (
            <form className="BeerForm" onSubmit={this.handleSubmit}>
                <h2>Add a new beer</h2>

            <FormField label="Name" htmlFor="name">
                <input 
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </FormField>
            <FormField label="Tagline" htmlFor="tagline">
                <textarea
                id="tagline"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
                />
            </FormField>
            <FormField label="Description" htmlFor="description">
                <textarea
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                />
            </FormField>
            <FormField label="First brewed" htmlFor="first_brewed">
                <input 
                type="text"
                id="first_brewed"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
                placeholder="MM-YYYY or YYYY"
                />
            </FormField>
            <FormField label="Brewers tips" htmlFor="brewers_tips">
                <textarea
                id="brewers_tips"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
                />
            </FormField>
            <FormField label="Attenuation level" htmlFor="attenuation_level">
                <input 
                type="number"
                id="attenuation_level"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
                />
            </FormField>
            <FormField label="Contributed by" htmlFor="contributed_by">
                <input 
                type="text"
                id="contributed_by"
                name="contributed_by"
                placeholder="name of contributor"
                value={this.state.contributed_by}
                onChange={this.handleChange}
                />
            </FormField>

            <div>
                <button type='submit' id="add-beer-btn">ADD</button>
            </div>
            
            </form>
        )
    }
}

export default BeerForm
