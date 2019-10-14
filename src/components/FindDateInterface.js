import React, {Component} from 'react'
import axios from 'axios'
import "../css/findDate.css"


class FindDataInterface extends Component {
    constructor(){
        super()


        this.state = {       
            users: [],
            potentialDate: [], //list of all the characters from api,
            randomName: "",
            randomImage: "",
            randomId: "",
            randomOccupation: "",
            randomNickName: "",
            // randomGreeting : ["Yo", "Wazup" , "Greetings person named ", "GOOOOOD MORNING, VIETNAM! My name is ", "Im batman.", "Doctor, my name is ", "Ello ", "Hi.", "Que hora es"],
            // greeting: ""
      }
    }

    componentDidMount(){
        axios.get("/api/user")
        .then(response => {
            this.setState({users: response.data})
            let randomGreetingNumber = Math.floor((Math.random() * 9) + 1)
            if(randomGreetingNumber === 1){
                this.setState({greeting: "Yo"})
            } 
            else if(randomGreetingNumber === 2){
                this.setState({greeting: "Greetings person named "})
            }
            else if(randomGreetingNumber === 3){
                this.setState({greeting: "GOOOOOD MORNING, VIETMAN! My name is, "})
            }
            else if(randomGreetingNumber === 4){
                this.setState({greeting: "Im batman. "})
            }
            else if(randomGreetingNumber === 5){
                this.setState({greeting: "Doctor, my name is. "})
            }
            else if(randomGreetingNumber === 6){
                this.setState({greeting: "Wazup" })
            }
            else if(randomGreetingNumber === 7){
                this.setState({greeting: "Ello" })
            }
            else if(randomGreetingNumber === 8){
                this.setState({greeting: "Hi "  })
            }
            else if(randomGreetingNumber === 9){
                this.setState({greeting: "Que hora es "})
            }

        })

        axios.get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            let randomNumber = Math.floor((Math.random() * 57) + 1)
            this.setState({potentialDate: response.data});
            for(let i = 0; i < this.state.potentialDate.length; i++){
                if(this.state.potentialDate[i].char_id === randomNumber){
                    this.setState({randomName: this.state.potentialDate[i].name})
                    this.setState({randomImage: this.state.potentialDate[i].img})
                    this.setState({randomId: this.state.potentialDate[i].char_id})
                    this.setState({randomOccupation: this.state.potentialDate[i].occupation})
                    this.setState({randomNickName: this.state.potentialDate[i].nickname})
                }
            }
        })

    }
           
    handleNo = e => {
        let randomNumber = Math.floor((Math.random() * 57) + 1)
        for(let i = 0; i < this.state.potentialDate.length; i++){
            if(this.state.potentialDate[i].char_id === randomNumber){
                this.setState({randomName: this.state.potentialDate[i].name})
                this.setState({randomImage: this.state.potentialDate[i].img})
                this.setState({randomId: this.state.potentialDate[i].char_id})
                console.log(this.state.potentialDate[i].name)
            }
        }

        if (this.state.randomName === "Tomás Cantillo" || this.state.randomName === "Kaylee Ehrmantraut" || 
        this.state.randomName === " Holly White" || this.state.randomName === "Brock Cantillo")    {
            alert("no")
        }
    }

    handleYes = e => {
        const {randomName, randomImage, randomId, randomOccupation, randomNickName} = this.state;
        e.preventDefault();
        axios.post("/api/date", {
            randomName,
            randomImage,
            randomId,
            randomOccupation,
            randomNickName
        }).then(response => {
            // console.log(response)
        }).catch(error => {
            console.log(error)
        })

    }


    updateName = e => {
        console.log("update")
    }


    render(){
        // let individualName = this.state.users.map((val) => {
        //     return (
        //         val.name
        //     )
        // })

        // let individualAge = this.state.users.map((val) => {
        //     return (
        //         val.age
        //     )
        // })

        // let individualOccupation = this.state.users.map((val) => {
        //     return (
        //         val.occupation
        //     )
        // })

        

        return(
    
            <main>  
                    <div>
                    {/* <p id="userDisplay">{this.state.gre}</p> */}
                    {/* <p id="userDisplay">{this.state.greeting} {individualName} and you are {individualAge} years old. Your job is {individualOccupation}.</p> */}
                     <div className="selection">
                    <p id="randomName">{this.state.randomName}</p>
                    <img id="randomImage" src={this.state.randomImage} height="40%" width="30%"></img>
                    </div>
                    <div className="buttons">
                    <button id="yes" onClick={this.handleYes}>Yes!</button>
                    <button id="no" onClick={this.handleNo}>Noooooooo</button>
                    </div>
                      </div>
            </main>
        )
    }
}


export default FindDataInterface;