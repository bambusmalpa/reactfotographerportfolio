import React from 'react';
import {Switch,Route} from "react-router-dom"
import styled from "styled-components"


const ContentContainer=styled.section`
  padding-top:10vh;
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