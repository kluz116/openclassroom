import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
             firstname :'',
             lastname:'',
             sex :'Male',
             description: ''
        }
    }

    handleFirstname = e =>{
        this.setState({
            firstname: e.target.value
        })
    }

    handleLastname = event =>{
        this.setState({
            lastname : event.target.value
        })
    }

    handleOption = e =>{
        this.setState({
                sex : e.target.value
        })
    }

    handleDescrpt = event =>{
            this.setState({
                description : event.target.value
            })
    }

    sendForm = event =>{
        event.preventdefault()
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.description} ${this.state.sex}`)
    }
    
    render() {
        return (
        <form onSubmit={this.sendForm}>
            <div>
            <label>Firstname: </label>
            <input type='text' value={this.state.firstname}  onChange={this.handleFirstname}></input>
            </div>
            <div>
            <label>Lastname: </label>
            <input type='text' value={this.state.lastname}  onChange={this.handleLastname}></input>
            </div>
            <div>
                <label>Sex</label>
                <select onChange ={this.handleOption}>
                    <option value='Male'>Male</option>
                    <option value='FeMale'>FeMale</option>
                </select>
            </div>
            <div>
                <label>Description</label>
                <textarea  value ={this.state.description}  onChange={this.handleDescrpt}></textarea>
            </div>
            <button type='submit'>Send </button>
        </form>
        )
    }
}
