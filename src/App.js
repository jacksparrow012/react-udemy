
import React, { Component } from 'react'
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchField: ' ',

    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }))
  }
  render() {
    const { monsters, searchField } = this.state;
    let filteredItem = monsters.filter(monst => monst.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (


      <div className="App">
        <h1 className="heading">Mosters Rolodex</h1>
        <SearchBox
          placeholder="search Monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredItem} />
      </div>
    )
  }
}
export default App





