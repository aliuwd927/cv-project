import React, { Component } from 'react'

class Header extends Component{



    render(){
        return(
            <div>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <button onClick={this.props.onClickButton}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Header