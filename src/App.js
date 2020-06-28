import React, { Component } from 'react';
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      this.setState({ monsters: users })
    } catch(error) {
      console.error(error)
    }
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    ); 
  }
}

export default App;