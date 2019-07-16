import React, { Component } from 'react'
import Nas from './Nas';

class Kluz  extends Component {

    constructor(props) {
        super(props)
        this.state = {
             message:'Hello My Dude'
        }
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting(){
        this.setState({
            message : 'You trying me out dude!!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Nas getGreeting = {this.getGreeting}/>
            </div>
        )
    }
}
export default  Kluz