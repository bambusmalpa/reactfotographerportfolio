import React from "react";
import { BrowserRouter as Router} from "react-router-dom";


import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Content from "./components/Content/Content"
import Loader from "./components/Loader/Loader"
import Events from "./components/Content/Events/Events"
import Index from "./components/Content/Home/Home"
import NoMatch from "./components/Content/NoMatch/NoMatch"
import Contact from "./components/Content/Contact/Contact"
import Gallery from "./components/Content/Gallery/Gallery"
import Prices from "./components/Content/Prices/Prices"

class App extends React.Component {
  state={
    loaded:false,
    pages:[
    {to:"/",name:"Home",comp:Index,exact:true},
    {to:"/events",name:"Eventy",comp:Events,exact:false},
    {to:"/gallery",name:"Galeria",comp:Gallery,exact:false},
    {to:"/prices",name:"Cennik",comp:Prices,exact:false},
    {to:"/contact",name:"Kontakt",comp:Contact,exact:false},
    {to:null,name:null,comp:NoMatch,exact:false}]
  }
  constructor(props){
    super(props)


    Loader.load(()=>this.setState({loaded:true}))
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
