import React from "react";
import styled from "styled-components"
const Sign=styled.div`
position:absolute;
width: 150px;
height: 150px;
background-color: #ffff00;
border:5px solid #000000;
transform: translate(-50%,-50%) rotate(45deg);
transform-origin: center center;
left:50%;
top:50%;
display: flex;
justify-content: center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
font-size: 24px;

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
        <Sign>
        <div className="sign__el" >
            <div>WORK</div>
            <div>IN</div>
            <div>PROGRESS</div>
        </div>
        </Sign>


    )


}

export default Wip