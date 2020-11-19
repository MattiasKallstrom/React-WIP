import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import styled from 'styled-components';
//import Radium, {StyleRoot} from 'radium';



class App extends Component {
  state = {
    persons: [
      { id: 'asdfe', name: 'Max', age: 26 },
      { id: 'asdf2', name: 'Manu', age: 28 },
      { id: 'asdfsd', name: 'Phteven', age: 36 }
    ],
    otherState: 'hellllooooo',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

  this.setState( { persons: persons} )
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
     <div>
       {this.state.persons.map((person, index) => {
         return <Person 
         click = {() => this.deletePersonHandler(index)}
         name={person.name}
         age={person.age}
         key={person.id}
         
         changed={(event) => this.nameChangedHandler(event, person.id)} />
       })}
       </div> 
      );

      
    }

    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red'); //Red class
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red and 'bold]
    }

     return (
    
       <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}>This totally works</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle
          </button>
         {persons}
      </div>
      
     );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi I\'m a react app!!!!') );
  }
}

export default App;
