import React, { Component } from 'react'
import CardDet from '../cards/carddet';


import './card-List.css';
 class CardList extends Component {
  render() {
      const {monsters}= this.props;

    return (
      <div className='card-List'>
        {monsters.map((monster)=>{
          return <CardDet  monster={monster}/>
          
        })}
      </div>
    )
  }
}

export default CardList