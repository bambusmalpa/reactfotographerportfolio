import React from 'react';
import styled from "styled-components";
import url from "./Home/images/homeFoto.jpg"

const HomeSection=styled.section`
padding-top:10vh;
width:100%;
height:75vh;
background:url(${url}) no-repeat;
background-size: 100% 100%;
`




function Index() {
  console.log(url)
  return(
    <>
        <HomeSection >
            <div className="target"></div>
        </HomeSection>
    </>




    
  )
}

export default Index