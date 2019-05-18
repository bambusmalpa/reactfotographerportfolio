import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import styled from "styled-components"

import Header from "./components/Header/Header"

import Footer from "./components/Footer/Footer"
import Content from "./components/Content/Content"
import Loader from "./components/Loader/Loader"
import Users from "./components/Content/Users"
import About from "./components/Content/About"
import Index from "./components/Content/Home"
import NoMatch from "./components/Content/NoMatch"


class App extends React.Component {
  state={
    loaded:false,
    pages:[{to:"/",name:"Home",comp:Index,exact:true,redirect:null},{to:"/about",name:"About",comp:About,exact:false,redirect:null},{to:"/users",name:"Users",comp:Users,exact:false,redirect:null},{to:null,name:null,comp:NoMatch,exact:false,redirect:"/"}]
  }
  constructor(props){
    super(props)
    Loader.load(()=>this.setState({loaded:true}))
  }
  

  
  componentWillUnmount(){
    this.setState({loaded:false})
  }

  componentDidUpdate(){
    
  }
  
  render(){
    
  return (
  
   <>
   {this.state.loaded?null:<Loader/>}
    <Router>
      <Header pages={this.state.pages}/>
      <Content pages={this.state.pages}/>
      <Footer/>
    </Router>
  </>
 
  );}
}

export default App;
