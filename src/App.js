import React, { Component } from 'react';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Chat with friends',
        completed: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })  });
  }

  // remove todo
  removeTodo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  }

  addTodo = (title) => {
    const newTodo = {
      id: new Date().getUTCMilliseconds(),
      title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    // console.log(...this.state.todos); // access the state with todos
    
    return (
      // can't use atribute class. It's className instead
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}  removeTodo = {this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default App;