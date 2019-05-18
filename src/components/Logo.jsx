import React from 'react';
import logo from"../images/HeaderLogo.svg"
import styled from "styled-components"

const LogoContainer=styled.div`
  margin-top:40px;
  position: relative;
  width:150px;
  height:195px;
  background-color:#ffffff;
  border-radius:50%;

`
const MainLogo=styled.img`
  top:45px;
  position:absolute;
  width:150px;
  height:150px;
  z-index:10
  
`

const Logo = () => {
 
  return (
  <LogoContainer>
    <MainLogo src={logo} alt=""/>
  </LogoContainer>

  )
}
 
export default Logo;