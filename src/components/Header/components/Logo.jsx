import React from 'react';
import styled from "styled-components"
import logo from "../images/HeaderLogo.svg"


const LogoContainer=styled.div`
  margin-left:10vw;
  display:flex;
  justify-content:center;
  align-items:center;
  width:5vh;
  height:5vh;
  background-color:#ffffff;

`
const MainLogo=styled.img`
  z-index:15;
  /* margin-top:7vh; */
  position:fixed;
  width:10vh;
  height:10vh;
  transition:0.5s;
  @media (max-width:768px){
    width:10vh;
    height:10vh;
    margin-top:0;
  }
`

const Logo = () => {
 
  return (
  <LogoContainer>
    <MainLogo src={logo} alt=""/>
  </LogoContainer>

  )
}
 
export default Logo;