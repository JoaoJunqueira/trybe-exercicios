import React from 'react'

class Pokemon extends React.Component {
    render(){
        const { name, type, weight, image} = this.props.pokemon
        return(
            <div className="pokemon">
                <p>{name}</p>
                <p>{type}</p>
                <p>{weight}</p>
                <img src={image} alt='pokemon'></img>
            </div>
        )
    }
}

export default Pokemon