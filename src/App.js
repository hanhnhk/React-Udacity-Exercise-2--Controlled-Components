import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList'
import AddItem from './AddItem'
import DeleteItem from './DeleteItem';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = (event, newValue )=> {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, newValue],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
       
        <AddItem addItem={this.addItem}/>        
        <DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound()}/>
        <ShoppingList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
