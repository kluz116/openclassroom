import React, { Component } from 'react'

export default class ChangeColorButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(){
        this.props.clickHandler();
        console.log('You clicked me');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
