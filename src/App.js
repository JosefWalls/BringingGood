import React , {Component} from 'react';
import FindDateInterface from "./components/FindDateInterface"
import YesToDate from "./components/YesToDate"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import UpdateUSerInfo from "./components/UpdateUserInfo"
import "./css/reset.css"
import "./css/app.css"
import "./css/darkModes/app.css"

class App extends Component {
  constructor(){
    super()

    this.state = {
       currentPage: "",
       styleMode: false
    }
  }

  // have ternary that says if style = true, have classNAme="light", if false then className = "Dark", bascially like the random image in yestodate
render (){
  return (
    <div className="background">
    <section>
    <Header />
    <section className="mainButtons">
    <nav>
    <button className="selector" onClick={ () => this.setState({currentPage: "Login"})}>Login</button>
    <button className="selector" onClick={ () => this.setState({currentPage: "FindDataInterface"})}>Potential Dates</button>
    <button className="selector" onClick={ () => this.setState({currentPage: "YesToDate"})}>Yea Homie!</button>
    <button className="selector" onClick={ () => this.setState({currentPage: "UpdateUserInfo"})}>Update your info</button>
    </nav>
    {this.state.currentPage === "Login"
    ?
    <Login />
    :
    this.state.currentPage === "FindDataInterface"
    ?
    <FindDateInterface />
    :
    this.state.currentPage === "YesToDate"
    ?
    <YesToDate />
    :
    this.state.currentPage === "UpdateUserInfo" 
    ?
    <UpdateUSerInfo />
    : 
    null
    }
    </section>
    <Footer />
    </section>
    </div>
  );
}
} 

export default App;