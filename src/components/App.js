import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Header from './Header';
import SinglePersonDisplay from './SinglePersonDisplay';

const people = [
  { id: 1, name: 'Angelina', age: 45, sex: 'female' },
  { id: 2, name: 'Brad', age: 54, sex: 'male' },
  { id: 3, name: 'Edward', age: 45, sex: 'male' },
  { id: 4, name: 'Becky', age: 27, sex: 'female' },
  { id: 5, name: 'Jessica', age: 36, sex: 'female' },
  { id: 6, name: 'Mark', age: 27, sex: 'male' },
  { id: 7, name: 'Paul', age: 36, sex: 'male' },
  { id: 8, name: 'Lisa', age: 24, sex: 'female' },
  { id: 9, name: 'John', age: 39, sex: 'male' },
  { id: 10, name: 'Andrew', age: 47, sex: 'male' },
]

class App extends Component {

  showPeople = () => {
    return people.map(person => <SinglePersonDisplay key={person.id} person={person} />)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Buttons />
        {this.showPeople()}
      </div>
    );
  }
}

export default App;
