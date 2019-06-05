import React from 'react';
import {NavLink} from "react-router-dom"
import styled from "styled-components"
import MainNav from "./components/MainNav"
import Logo from "./components/Logo"
import HamburgerButton from "./components/HamburgerButton"

const HeadBar=styled.header`
  position:fixed;
  display:flex;
  flex-direction:row;
  align-items:center;
  width:100vw;
  height:10vh;
  justify-content:space-around;
  background-color:#ffffff;
  @media (max-width:768px){
}`
class Header extends React.Component {
  state={
    menuOn:false,
  }
  toggleMenuOn=()=>{
    this.setState({
      menuOn:!this.state.menuOn
    })
  }

  render(){
  return ( 
  
    <HeadBar>
      <NavLink to="/" exact><Logo/></NavLink>
      
      <HamburgerButton menuOn={this.state.menuOn} toggleMenuOn={this.toggleMenuOn}  />
      <MainNav menuOn={this.state.menuOn} pages={this.props.pages} toggleMenuOn={this.toggleMenuOn}/>
      
    </HeadBar>
 
   );}
  }
export default Header;