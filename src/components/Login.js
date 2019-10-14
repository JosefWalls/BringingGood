import React, {Component} from 'react'
import axios from 'axios'
import "../css/login.css"

class Login extends Component {
    constructor(){
        super()


        this.state = {
          name: "",
          age: "",
          occupation: ""
        }
    }
    handleName = e =>{
      this.setState({name: e.target.value})
    }

    handleAge = e => {
      this.setState({age: e.target.value})
    }

    handleOccupation = e => {
      this.setState({occupation: e.target.value})
    }
    handleSubmit = e => {
      const {name, age, occupation} = this.state;
      axios.post("/api/user", {
        name,
        age,
        occupation
      }).then (response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }

    render(){
        return(

            <main>
                <input id="name" onChange={this.handleName} placeholder="Enter FULL name"></input>
                <input id="age" onChange={this.handleAge} placeholder="Enter actual age"></input>
                <input id="occupation" onChange={this.handleOccupation} placeholder="Enter Occupation"></input>
                <button id="submit" onClick={this.handleSubmit}>Submit Details</button>
            </main>
        )
    }
}


export default Login;