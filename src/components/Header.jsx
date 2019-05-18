import React from 'react';
import MainNav from "./MainNav"
import Logo from "./Logo"
import styled from "styled-components"

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
  border-bottom:1px solid black;
`;

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return ( 
  
    <HeadBar>
      <Logo/>
      <MainNav pages={this.props.pages} />
    </HeadBar>
  
   );}
  }
export default Header;