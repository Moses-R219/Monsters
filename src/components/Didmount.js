import React, { Component } from 'react'
import CardList from './card-list/card-list';
import SearchBox from './search-box/search-box';

class Didmount extends Component {
    constructor()
    {
        console.log("Moses 2");
      super();
  
      this.state={
        monsters:[],
        searchStr:'',

    };
    console.log()
    }
    componentDidMount(){
        console.log("Moses 5")
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) =>response.json())
        .then((users)=>
            this.setState(
                ()=>{
                    return {monsters:users};
                }
        ));
        
        
    }

    onSearchChange=(event)=>
        { 
        const searchStr=event.target.value.toLocaleLowerCase()
        this.setState(()=>
        {
            return {searchStr}
        });
    

    };
render(){
console.log("moses 3")
    const {monsters,searchStr}=this.state;
    const {onSearchChange}=this;
    const filteredMonster=monsters.filter(
        (monster)=>
        {
            return monster.name.toLocaleLowerCase().includes(searchStr);
        });

    return (
      <div className='App'>
        <SearchBox placehold='Search the monster' className="Search-Box" onchangeHandler={onSearchChange}/>
        
        <CardList monsters={filteredMonster}/>
        </div>
        );

    

}
}
  
export default Didmount