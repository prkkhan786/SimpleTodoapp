import React from 'react';
import { Component } from 'react';


class SearchBox extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="col-12 m-3">
        <form onSubmit={this.props.handlesumit} className="form-group">
        <input type="text" 
            className="form-control" 
            id="searcbox"
             aria-label="Text input with checkbox"
              onChange={this.props.onchangeevent}
              value={this.props.text}
              placeholder="Enter Your Task Here"/>
              <div className="button">
              <button type="button"
              className="btn btn-primary m-2"
              >TODO</button> 
              </div>
            
        </form>
        </div>
         );
    }
}
 
export default SearchBox;