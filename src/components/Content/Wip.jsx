import React from "react";
import styled from "styled-components"

const Body=styled.div`
width:100vw;
height:50vh;

`
const Sign=styled.div`
margin-left:auto;
margin-right:auto;
width: 150px;
height: 150px;
background-color: #ffff00;
border:5px solid #000000;
transform:translateY(50%)rotate(45deg);
transform-origin: center center;
display: flex;
justify-content: center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
font-size: 24px;
border-radius:5px;
box-shadow: 0px 0px 0px 5px rgba(255,255,0,1);

>div{
    height: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transform:rotate(-45deg) translateY(-25%);
    text-align: center;
}
`


const Wip =()=>{
    return(
        <Body>
        <Sign>
        <div className="sign__el" >
            <div>WORK</div>
            <div>IN</div>
            <div>PROGRESS</div>
        </div>
        </Sign>
        </Body>


    )


}

export default Wip