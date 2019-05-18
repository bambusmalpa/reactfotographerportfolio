import React from 'react';
import styled from "styled-components"
import logo from "../images/HeaderLogo.svg"


const LogoContainer=styled.div`
 
  display:flex;
  justify-content:center;
  align-items:center;
  width:10vh;
  height:10vh;
  background-color:#ffffff;
  border-radius:50%;

`
const MainLogo=styled.img`
 
  width:9vh;
  height:9vh;
  
`

const Logo = () => {
 
  return (
  <LogoContainer>
    <MainLogo src={logo} alt=""/>
  </LogoContainer>

  )
}
 
export default Logo;