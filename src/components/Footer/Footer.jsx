import React from 'react';
import styled from "styled-components"



const FooterContainer=styled.footer`
  width:100%;
  background-color:transparent;
  height:10vh;
  color:black;
  display:flex;
  align-items:center;
  justify-content:space-around;
`

const Author=styled.p`

`
const Social=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:10vw;


`
const socialsArr=
[{name:"twitter",url:"https://twitter.com/marcin_piotrow",color:"#00aced",icon:"fab fa-twitter-square"},
{name:"facebook",url:"https://www.facebook.com/marcinpiotrowphotography/",color:"#3b5998",icon:"fab fa-facebook-square"},
{name:"instagram",url:"https://www.instagram.com/marcin_piotrow_photography/?hl=pl",color:"#fb3958",icon:"fab fa-instagram"}]





const socials=socialsArr.map((el)=>{
  return(<a href={el.url} target="_blank"><i style={{color:el.color,fontSize:"30px"}}class={el.icon}></i></a>)
})
const Footer = () => {
  return ( <FooterContainer>


              <Author>Made with passion by bambusMalpa</Author>
              <Social>{socials}</Social>
              
            </FooterContainer> );
}
 
export default Footer;