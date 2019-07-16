import React, { Component } from 'react'
import axios from 'axios'


export default class Todo extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             todo : []
        }
    }
     
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response =>{
            this.setState({
                todo : response.data
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
            {this.state.todo.map((item)=>

                <p key = {item.id}>{item.title}</p>
            )

            }
                
            </div>
        )
    }
}
