import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import About from './components/pages/About'
import axios from "axios";

import "./App.css";

// going to fetch api placeholder json instead of having todos hardcoded
// for that, we are going to use npm axios -> npm i axios
class App extends Component {
  state = {
    todos: [
      // // HARDCODED
      // { id: 1, title: "Take out the trash", completed: false}, 
      // { id: 2,title: "Dinner",completed: false},
      // {id: 3,title: "Chat with friends",completed: false}
      
    ]
  };

  // going to use another lifecycle method (the other was render)
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState( {todos: res.data } ));
  }

  // toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // remove todo
  removeTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }));
  };

  addTodo = title => {
    // // NOT NEEDED ANYMORE - was hardcoded
    // const newTodo = {
    //   id: new Date().getUTCMilliseconds(),
    //   title,
    //   completed: false
    // };

    axios.post('https://jsonplaceholder.typicode.com/todos', { 
      title, completed: false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data] }));
  
  };

  render() {
    // console.log(...this.state.todos); // access the state with todos

    return (
      // every app component must be wrapped by Router
      // can't use atribute class. It's className instead
      // must use render props because it's more than 2 components - AddTodo and TODO
      // render props must return something -> react fragment
      // Route exact -> so it only shows own components of the route we are in 
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete}
                    removeTodo={this.removeTodo} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
