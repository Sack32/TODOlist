import React, {Component} from 'react';
import'./App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo'
import Header from './Components/Layouts/Header';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Find keys',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take out the dog',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Complete assignment',
        completed: false
      }
    ]
  }

  markComp = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false

    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }

  render() {
    return(
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo = {this.addTodo} />
        <Todos todos = {this.state.todos} markComp={this.markComp} delTodo={this.delTodo}/>
      </div>
    </div>
    );
  }
}


export default App;
