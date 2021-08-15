import React from 'react'

const OneBeerContainer = (props) => {
    return (
        <div className="OneBeer">
                <div>
                    <img src={props.beer.image_url} alt={props.beer.name} />
                </div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="beer-name"><h2>{props.beer.name}</h2></td>
                            <td className="beer-attenuation-level">{props.beer.attenuation_level}</td>
                        </tr>
                        <tr>
                            <td className="beer-tagline">{props.beer.tagline}</td>
                            <td className="beer-first-brewed">{props.beer.first_brewed}</td>
                        </tr>
                        </tbody>
                    </table>
                <div>
                    <p className="beer-description">{props.beer.description}</p>
                    <p className="beer-contributor">{props.beer.contributed_by}</p>
                </div>
            </div>
    )
}

export default OneBeerContainer


