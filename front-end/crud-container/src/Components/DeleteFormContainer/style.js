import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#363944;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content: center;
    align-items: center;


`
export const Container = styled.div`
width: 40vw;
height:70vh;
background-color:aliceblue;
border-radius:20px;
flex-direction:column;
`
export const TitleContainer = styled.h1`
text-align:center;
font-size:30px;
font-family: sans-serif;
font-style:italic;
margin:5px;
`
export const Input = styled.input`
width:80%;
border:none;
height:5vh;
margin:30px;
border-bottom: 2px solid black;
background-color:aliceblue;
font-size:15px;
font-weight:bold;
`
export const OptionsType = styled.select`
width:30%;
height:7vh;
margin-left:34%;


`
export const AuxiliarText = styled.p`
font-size:20px;
font-weight:bold;
text-align:center;

`
export const Options = styled.option`
font-size: 10px;
`
export const BtnContainer = styled.button`
width:10vw;
height: 5vh;
background-color: #c9c9c9;
padding:15px;
margin:50px;
left:350px;
`