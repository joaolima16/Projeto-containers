import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(132, 134, 140,0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
width: 30vw;
height:50vh;
background-color:aliceblue;
border-radius:20px;
flex-direction:column;
`
export const TitleContainer = styled.h1`
text-align:left;
font-size:40px;
font-family: sans-serif;
font-style:italic;
padding:20px;
`
export const Input = styled.input`
width:80%;
border:none;
height:5vh;
margin:30px;
border-bottom: 2px solid black;
background-color:aliceblue;
font-size:20px;
font-weight:bold;
`
export const OptionsType = styled.select`
width:20%;
height:5vh;


`
export const AuxiliarText = styled.p`
font-size:20px;
font-weight:bold;
text-align:center;

`
export const Options = styled.option`
font-size: 15px;
`
export const BtnContainer = styled.button`
  width: 10vw;
  height: 5vh;
  background-color: #4169e1;
  padding: 15px;
  margin-top: 50px;
  left: 350px;
  border: none;
  border-radius: 5px;
  font-size:20px;
  color:#ffff;
`;
export const WrapperBtn = styled.div`
display:flex;
justify-content:center


`
export const WrapperOptions = styled.div`
display:flex;
justify-content:center;
align-items:center
`