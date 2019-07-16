import React, { Component } from 'react'

export default class AddComment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             email:'',
             body :''
        }
    }
   onChangeHandler = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onsubmitHandler = event =>{
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        
        const {name,email,body} = this.state
        return (
            <form onSubmit = {this.onsubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type='text' name="name" value={name} onChange = {this.onChangeHandler}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name="email" value ={email} onChange = {this.onChangeHandler}></input>
                </div>
                <div>
                    <label>Body</label>
                    <input type='text' name="body" value={body} onChange = {this.onChangeHandler}></input>
                </div>

                <button type='submit'> Add Comment</button>
            </form>
        )
    }
}
