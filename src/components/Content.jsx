import React from 'react';
import {Switch,Route,withRouter} from "react-router-dom"
import Users from "./Users"
import About from "./About"
import Index from "./Home"
import NoMatch from "./NoMatch"
import styled from "styled-components"

const ContentContainer=styled.section`
  padding-top:80px;
  min-height:85vh;

`

const Content = (props) => {

const routes=props.pages.map((el)=>{
  return (<Route key={el.name} path={el.to} exact={el.exact} component={el.comp} />)
})

console.log(routes)
  return (<Switch>
            <ContentContainer>
              {routes}
            </ContentContainer>
          </Switch>  );
}

export default Content;