import React from 'react';
import img from "./images/LoaderLogo.svg"
import styled from "styled-components"

const Loaderimg=styled.img`
  
  width:200px;
  height:200px;
  margin-top:10px;
  
  `
const Loadrbackground=styled.div`
position:absolute;
  width:100vw;
  height:100vh;
  background-color:#ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
  animation:vanish 0.5s linear forwards;
  animation-delay:1.5s;
  z-index:15;
  @keyframes vanish {
    from{background-color:#ffffff;}
    to{background-color:transparent;}
  }
`


class Loader extends React.Component {
 
  static load(cb){
    setTimeout(cb,2200)
  }


  render(){
  return ( 
  <Loadrbackground>
    <Loaderimg src={img}></Loaderimg>
   
  </Loadrbackground>
  );}
}
 
export default Loader;