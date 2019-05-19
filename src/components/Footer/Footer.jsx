import React from 'react';
import styled from "styled-components"



const FooterContainer=styled.footer`
  width:100%;
  background-color:transparent;
  height:5vh;
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
    width:15vw;
    &>i{
      fontSize:"2vw"
    }
    @media (max-width:768px){
    width:50vh;
    height:10vh;
    margin-top:0;
  }

`
const socialsArr=
[{name:"twitter",url:"https://twitter.com/marcin_piotrow",color:"#00aced",icon:"fab fa-twitter"},
{name:"facebook",url:"https://www.facebook.com/marcinpiotrowphotography/",color:"#3b5998",icon:"fab fa-facebook-f"},
{name:"instagram",url:"https://www.instagram.com/marcin_piotrow_photography/?hl=pl",color:"#fb3958",icon:"fab fa-instagram"}]





const socials=socialsArr.map((el)=>{
  return(<a href={el.url} key={el.name} rel="noopener noreferrer" target="_blank"><i style={{color:el.color}}className={el.icon}></i></a>)
})
const Footer = () => {
  return ( <FooterContainer>


              <Author>Made with <i style={{color:"#F21A25"}}className="fas fa-heart"></i> to <i style={{color:"#61DBFB"}} className="fab fa-react fa-spin"></i> by bambusMalpa</Author>
              <Social>Śledz mnie na: {socials}</Social>
              
            </FooterContainer> );
}
 
export default Footer;