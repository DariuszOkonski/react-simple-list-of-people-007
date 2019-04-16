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
  state = {
    sex: 'all',
  }

  handleClick = (sex) => {
    this.setState({
      sex
    })
  }

  showPeople = () => {
    switch (this.state.sex) {
      case 'all':
        return people.map(person => <SinglePersonDisplay key={person.id} person={person} />);
      case 'female':
        const women = people.filter(person => person.sex === 'female');
        return women.map(person => <SinglePersonDisplay key={person.id} person={person} />);
      case 'male':
        const man = people.filter(person => person.sex === 'male');
        return man.map(person => <SinglePersonDisplay key={person.id} person={person} />);
      default:
        return <h1>No data found</h1>
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Buttons click={this.handleClick} />
        {this.showPeople()}
      </div>
    );
  }
}

export default App;
