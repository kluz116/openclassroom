import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
            super(props);
            this.state = {
                time :new Date().toLocaleDateString()
            }
    }

    render() {
        return (
            <div>
                <h1 className="App-clock">The Date Is : {this.state.time}</h1>
            </div>
        )
    }
}
