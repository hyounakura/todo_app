import React, { Component } from 'react';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      value: "",
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: '',
    })
  }

  render() {
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })
    return <div>
      <h1>TO DO APP</h1>
      <input type="text" value={this.state.value} onChange={e => this.onChange(e)} />
      <button onClick={() => this.add()}>追加</button>
      <ul>
       {todoListNode}
      </ul>
    </div>;
  }
}

export default TodoApp;