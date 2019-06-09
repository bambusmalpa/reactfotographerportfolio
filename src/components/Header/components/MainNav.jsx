import React from "react";
import {NavLink} from "react-router-dom"
import styled from "styled-components"


const ListOfPages=styled.ul`
  display:flex;
  justify-content:space-around;
  align-items:center;
  list-style:none;
  width:40vw;
  height:10vh;
  align-items:center;
  box-sizing:border-box;}

  @media (max-width:768px){
  position:absolute;
  flex-direction:column;
  background-color:#ffffff;
  width:30vw;
  transition:0.2s;
  margin-top:25vh;
  right:-30vw;
  z-index:100;
  &.on{
    right:0vw;
  }
  &.off{
    right:-30vw;
  }}`

const ListOfPagesElement=styled.li`
  display:flex;
  justify-content:center;
  align-items:center;
  line-height:10vh;
  text-align:center;
  display:block;
  width:25%;
  height:100%;
  box-sizing:border-box;

  >a{

    height: 100%;
    color:#222222;
    background-color:#ffffff;
    display:block;
    width:100%;
    text-decoration:none;
    box-sizing:border-box;
    transition:1s;
  }

  >a:hover{
    background-color:red;
  }
  .selected{
    background-color:#eeeeee;
  
  }
  @media (max-width:768px){
    width:30vw;
  }

`


class MainNav extends React.Component {
 
 render(){
    const readyList=this.props.pages.map((el)=>{
        if(el.name===null)
        {return null}
    
        return (
        <ListOfPagesElement key={el.name}>
        <NavLink key={el.name} to={el.to}  activeClassName="selected" exact={el.exact}  >{el.name.toUpperCase()}</NavLink>
      </ListOfPagesElement>)})
  
  return (
    

    <nav>
    <ListOfPages className={this.props.menuOn?"on":"off"}>
      {readyList}
      
    </ListOfPages>
    
  </nav>);
    
    }
}

export default MainNav;


