import React, { Component } from 'react'

class Header extends Component{

    render(){

        return(
            <div>
            <form onSubmit={this.onSubmitTask}>
              <input type="text"
              onChange={this.handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>
        )
    }
}

export default Header