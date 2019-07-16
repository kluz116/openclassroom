import React, { Component } from 'react'
import axios from 'axios'
export default class CommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
             comment:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response =>{
            console.log(response)
            this.setState({
                comment:response.data
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                {this.state.comment.map((item)=>
                      <div key ={item.id }>{item.name}</div>
                )}
            </div>
        )
    }
}
