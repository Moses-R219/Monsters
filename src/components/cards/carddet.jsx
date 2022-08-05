import React, { Component } from 'react'
import './card-container.styles.css';
 class CardDet extends Component {
  render() {
    
    const {id,name,email}=this.props.monster;
    return (
      <div className="card-container" key={id}>
          <img  alt={`${name}`} 
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
            <h1>{`${name}`}</h1>
            <p>{`${email}`}</p>
        </div>
    );
  }
}

export default CardDet