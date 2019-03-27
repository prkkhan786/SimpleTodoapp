import React, { Component } from 'react';
class Todos extends Component {
    state = { 

     }
    render() { 
        if(this.props.todos.length===0){
            return(
               
                    <div className="col-12">
                    <h1 className="App">No task Enter your tasks here</h1>
                    </div>
                    
            )
        }
        return ( 
        <div className="col-12">
    <ul className="list-group">
    {
        this.props.todos.map((todo=>(
            <li key={todo} 
            className="list-group-item red"
            > {todo} <button type="button"
             className="close" 
             aria-label="Close"
              onClick={()=>this.props.handleclose(todo)}><span aria-hidden="true">&times;</span></button> </li>
        )))
    }
 
 
</ul>
        </div> );
    }
}
 
export default Todos;