import React, { Component } from 'react'
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const {placehold,className,onchangeHandler}=this.props;//in this line we use the names instead of continuous using of this.props keyword
    return (
      <div>
        <input 
        className={className}//we can use {this.props.className} like this also .......
        type="search" 
        placeholder={placehold} 
         onChange={onchangeHandler}// in this line the props will be used to call 
        // the method from parent component for reusable "onchangeHandler is our user defined method "
        />
      </div>
    )
  }
}

export default SearchBox