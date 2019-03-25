// rce and press enter to use snippet

import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    // if (this.props.todo.completed)
    //   return {
    //     textDecoration: "line-through"
    //   };
    // else
    //   return {
    //     textDecoration: "none"
    //   };

    //cut down above code with ternary operator
    return {  
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  };

  markComplete = () => {
    console.log(this.props);
    this.props.todo.title = "batatas";
  }

  render() {
    // destructuring object so it's easier
    const { id, title } = this.props.todo;

    return (
      // <div style = {{ backgroundColor:'red' }}>
      // <div style = { itemStyle }> // object style
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.removeTodo.bind(this, id)} style={btnStyle} >x</button>
        </p>
      </div>
    );
  }
}

// good practise - implement PropTypes
// single object todo is required
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
