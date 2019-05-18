import React from 'react';
import styled from "styled-components"
import MainNav from "./components/MainNav"
import Logo from "./components/Logo"


const HeadBar=styled.header`
  position:fixed;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:10vh;
  justify-content:space-around;
  background-color:#ffffff;
  
`;

class Header extends React.Component {
 
  render(){
  return ( 
  
    <HeadBar>
      <Logo/>
      <MainNav pages={this.props.pages} />
    </HeadBar>
  
   );}
  }
export default Header;