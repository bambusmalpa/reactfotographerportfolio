import React from "react";
import {NavLink} from "react-router-dom"
import styled from "styled-components"

const ListOfPages=styled.ul`
  display:flex;
  justify-content:space-around;
  align-items:center;
  list-style:none;
  width:30vw;
  height:100%;
  align-items:center;
  box-sizing:border-box;
  
`

const ListOfPagesElement=styled.li`
  display:flex;
  justify-content:center;
  align-items:center;
  line-height:10vh;

  text-align:center;
  display:block;
  width:30%;
  height:100%;
  box-sizing:border-box;

  >a{
    height: 100%;
    color:#222222;
    text-decoration:none;
    display:block;
    box-sizing:border-box;
    transition:1s;
  }
  .selected{
    background-color:#eeeeee;
  
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
    <ListOfPages>
      {readyList}
    </ListOfPages>
  </nav>);
    
    }
}

export default MainNav;