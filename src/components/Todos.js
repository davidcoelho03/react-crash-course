// conventional away of naming - Uppercase component first letter of each word

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {    
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} markComplete={this.props.markComplete}  removeTodo = {this.props.removeTodo} todo={todo} /> // prop todo
    ));
  }
}

// good practise - implement PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;