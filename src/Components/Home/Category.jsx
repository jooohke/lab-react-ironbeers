import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    return (
        <div className="Category">
            <img src={props.picture} alt={"photo " + props.title}/>
            <h2><Link  to={props.link}>{props.title}</Link></h2>
        </div>
    )
}

export default Category
