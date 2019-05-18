import React from 'react';
import {Switch,Route} from "react-router-dom"
import styled from "styled-components"

// import Users from "./Users"
// import About from "./About"
// import Index from "./Home"
// import NoMatch from "./NoMatch"


const ContentContainer=styled.section`
  padding-top:80px;
  min-height:85vh;

`

const Content = (props) => {

const routes=props.pages.map((el)=>{
 
  return (<Route key={el.name} path={el.to} exact={el.exact}component={el.comp}/>)
})


  return (
            <ContentContainer>
              <Switch>
              {routes}
              </Switch>
            </ContentContainer>
           );
}

export default Content;