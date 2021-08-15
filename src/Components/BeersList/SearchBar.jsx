import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className="FilterForm">
                <label htmlFor="nameFilter">Find a beer</label>
                <input type="text" value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default SearchBar

