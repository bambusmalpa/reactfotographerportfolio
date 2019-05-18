import React from "react";
// import Logo from "./components/Logo"
import Footer from "./components/Footer"
import Content from "./components/Content"
import styled from "styled-components"
import Loader from "./components/Loader"
import Users from "./components/Users"
import About from "./components/About"
import Index from "./components/Home"
import NoMatch from "./components/NoMatch"
import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
// import MainNav from "./components/MainNav";
import Header from "./components/Header"











class App extends React.Component {
  state={
    loaded:false,
    pages:[{to:"/",name:"Home",comp:Index,exact:true},{to:"/about",name:"About",comp:About,exact:false},{to:"/users",name:"Users",comp:Users,exact:false}]
  }
  constructor(props){
    super(props)
    Loader.load(()=>this.setState({loaded:true}))
  }
  

  
  componentWillUnmount(){
    this.setState({loaded:false})
  }

  componentDidUpdate(){
    console.log(this.state.location)
  }
  
  render(){
    
  return (
  
   <>
   {/* {this.state.loaded?null:<Loader/>} */}
    <Router>
      <Header pages={this.state.pages}/>
      <Content pages={this.state.pages}/>
      <Footer/>
    </Router>
  </>
 
  );}
}

export default App;
