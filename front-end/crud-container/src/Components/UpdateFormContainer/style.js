import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(132, 134, 140, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Container = styled.div`
width: 30vw;
height:60vh;
background-color:#ffff;
border-radius:20px;

flex-direction:column;
`
export const TitleContainer = styled.h1`
  text-align: left;
  font-size: 40px;
  font-family: sans-serif;
  font-style: italic;
  padding: 20px;
`;
export const Input = styled.input`
  width: 40%;
  height: 5vh;
  border-radius: 10px;
  border: solid 2px #e1e1e1;
  margin: 30px;
  color: #a9a9a9;
  background-color: #ffff;
  font-size: 15px;
  font-weight: bold;
`;
export const OptionsType = styled.select`
width:100%;
height:5vh;

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
  width: 10vw;
  height: 5vh;
  background-color: #4169e1;
  margin-top: 50px;
  left: 350px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: #ffff;
`;
export const WrapperOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
export const Label = styled.label`

font-size:20px;

`
export const InputContainer = styled.div`
display:block;

`