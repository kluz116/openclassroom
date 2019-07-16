import React, { Component } from 'react'

export default class Nas extends Component {

     getPassedHandler(){
         this.props.getGreeting()
     }
    render() {
        return (
            <div>      
                <button onClick={this.getPassedHandler.bind(this)}>Clck Me!!</button>  
            </div>
        )
    }
}
