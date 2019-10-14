import React, {Component} from 'react'
import "../css/yesToDate.css"
import axios from 'axios'

class YesToDate extends Component {
    constructor(){
        super()


        this.state = {
            users: [],
            date: [],
        }
    }

    componentDidMount(){
        axios.get("/api/user")
        .then(response => {
            this.setState({users: response.data});

        })

        axios.get("/api/date")
        .then(response => {
            this.setState({date: response.data})
        })

        let combinations = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu",
        "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "Hf", "Ta", "W", "Re",
        "Os", "Ir", "Pt", "Au", "Hg", "Tll", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn" , "Nh", "Fl", "Mc", "Lv", "Ts", "Og"]

        for(let i = 0; i < this.state.users.length; i++){
            console.log(this.state.users[i])
        }

        console.log(this.state.users)

    }
    
    handleDelete = (id) => {
        axios.delete(`/api/date/${id}`)
        .then(response => {
            this.setState({date: response.data})
        }).catch(error => {
            console.log(error)
        })

        alert("Your date has been removed from your list. They didnt want to date you anyways.")
    }

    handleDate = e => {
        let responses1 = "Your date has said yes to a date." 
        let responses2 = "They will meet you at the McDonalds near Lufginia, Hugary. Congrats!"
        let responses3 =  "Your date can define all the letters between 1 and 100, so have fun on your date."
        let responses4 = "Your date has a nickname of Gillete, cause their the best your gonna get."
        let responses5 =  "Your date believes mayonnaise isnt an instrument, instead a music genre."

        let randomNumber = Math.floor((Math.random () * 5) + 1)
        if(randomNumber === 1){
            alert(responses1)
        }   else if (randomNumber === 2){
            alert(responses2)
        }   else if (randomNumber === 3){
            alert(responses3)
        }   else if (randomNumber === 4){
            alert(responses4)
        }   else if (randomNumber === 5){
            alert(responses5)
        }
    }

    render(){

        let individualName = this.state.users.map((val) => {
            return (
                val.name
            )
        })

        let individualAge = this.state.users.map((val) => {
            return (
                val.age
            )
        })

        let individualOccupation = this.state.users.map((val) => {
            return (
                val.occupation
            )
        })

        let randomName = this.state.date.map((val) => {
            return (
                val.randomName
            )
        })

        let randomImage = this.state.date.map((val )=> {
            return (
                val.randomImage
            )
        })

        let randomNickname = this.state.date.map((val )=> {
            return (
                val.randomNickname
            )
        })

        let randomOccupation = this.state.date.map((val => {
            return (
                val.randomOccupation
            )
        }))

    

        return(
                <div className="main">
                  <div className="user">
                    <p>Congrats on your selection!(?). Now lets compare you two. You are {individualName} and you are {individualAge} years old, and your job is {individualOccupation}.</p>
                  </div>
                  <span id="vs">VS.</span>
                  <div className="random">
                    <p>This is {randomName}. They are a {randomOccupation}.</p>
                    {this.state.date.length === 1 ? <img src={randomImage} id="image"></img> : null}
                  </div>
                  <button id="nevermind" onClick={this.handleDelete}>Nevermind..</button>
                  <button id="date" onClick={this.handleDate}>I wants to date</button>
                </div>
        )
    }
}


export default YesToDate;