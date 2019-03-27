import React, { Component } from 'react';
import './App.css';
import SearchBox from './searchbox';
import 'bootstrap/dist/css/bootstrap.css';
import Todos from './todos';

class App extends Component {
  constructor(){
    super();

    this.state = {
      todos:[],
      text:""
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handlesumit = this.handlesumit.bind(this);
    this.handleclose = this.handleclose.bind(this);
  }

  handleChange(e){
    this.setState({
      text:e.target.value
    })
   // console.log(e.target.value);
  }

  handlesumit(e){
    e.preventDefault();
    if(this.state.text===""){
      return 
    }
    const todos  = [...this.state.todos];
    todos.push(this.state.text);
    console.log(todos);
    this.setState({
      todos:todos
    })

  }

  handleclose(todo){
    const oldarr = [...this.state.todos];
    const filter = oldarr.filter((item)=>{
      return todo!==item
    })

    this.setState({
      todos:filter
    })
  }


  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-12">
      <h1 className="m-2 App"> Todo App</h1>  
      </div>
     
          <SearchBox onchangeevent={this.handleChange}
           text={this.state.text}
           handlesumit={this.handlesumit}/>
          <Todos todos={this.state.todos} handleclose={this.handleclose}/>
      </div>
         
      </div>
    );
  }
}

export default App;
