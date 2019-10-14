import React, {Component} from 'react'
import axios from 'axios'
import "../css/updateInfo.css"

class UpdateUSerInfo extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            age: "",
            occupation: ""
        }
    }


    updateName = e => {
        this.setState({name: e.target.value})
    }

    updateAge = e => {
        this.setState({age: e.target.value})
    }

    updateOccupation = e => {
        this.setState({occupation: e.target.value})
    }

    updateData = e => {
        console.log(this.state.name, this.state.age, this.state.occupation)
        const {name, age, occupation} = this.state;
        axios.put("/api/user", {
            name,
            age,
            occupation
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    render(){
        return(

            <main>
                <input id="name" onChange={this.updateName}placeholder="Update Name"></input>
                <input id="age" onChange={this.updateAge} placeholder="Update Age"></input>
                <input id="occupation" onChange={this.updateOccupation} placeholder="Update occupation"></input>
                <button id="submit" onClick={this.updateData}>Submit</button>
            </main>
        )
    }
}


export default UpdateUSerInfo;