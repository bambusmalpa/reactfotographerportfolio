import React from "react";
import { BrowserRouter as Router} from "react-router-dom";


import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Content from "./components/Content/Content"
import Loader from "./components/Loader/Loader"
import About from "./components/Content/About"
import Index from "./components/Content/Home"
import NoMatch from "./components/Content/NoMatch"
import Contact from "./components/Content/Contact"
import Galery from "./components/Content/Galery"
class App extends React.Component {
  state={
    loaded:false,
    pages:[{to:"/",name:"Home",comp:Index,exact:true},{to:"/about",name:"O mnie",comp:About,exact:false},{to:"/galery",name:"Galeria",comp:Galery,exact:false},{to:"/contact",name:"Kontakt",comp:Contact,exact:false,},{to:null,name:null,comp:NoMatch,exact:false}]
  }
  constructor(props){
    super(props)


    Loader.load(()=>this.setState({loaded:true}))
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
