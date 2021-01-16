import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoElement from './TodoElement';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      value: "",
    }
  }

  onChange(key_value) {
    this.setState(key_value)
  }

  add(element) {
    this.setState({
      todoList: this.state.todoList.concat(element),
      value: '',
    })
  }

  handleDelete(id) {
    let todoList = this.state.todoList.concat();
    let index = 0;
    todoList.map((element, idx) => {
      if(element.id === id) {
        index  = idx;
      }
    })
    todoList.splice(index, 1);
    this.setState({todoList: todoList})
  }

  render() {
    const todoListNode = this.state.todoList.map(element => {
      return (
        <TodoElement element={element} key={element.id} onDelete={() => this.handleDelete()}/>
      )
    })
    return <div>
      <h1>TO DO APP</h1>
      <AddTodo 
        {...this.state}
        onChange={e => this.onChange(e)}
        add={(element) => this.add(element)}
      />
      <ul>
       {todoListNode}
      </ul>
    </div>;
  }
}

export default TodoApp;