import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  TitleContainer,
  Input,
  OptionsType,
  AuxiliarText,
  Options,
  BtnContainer,
  WrapperBtn,
  WrapperOptions
} from "./style";
import axios from "axios";
export default function FormContainer() {
  const [Values, SetValues] = useState([]);

  const AddingContainer = async () => {
    if (Values.Number == "" || Values.type == "") {
      alert("Please enter a number");
    }
    axios
      .post("http://localhost:3500/InsertContainer", Values)
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <>
      <Wrapper>
        <Container>
          <TitleContainer> Cadastre o seu container </TitleContainer>
          <Input
            placeholder="Insira o numero do container"
            onChange={(value) => {
              SetValues({ ...Values, Number: value.target.value });
            }}
          />
          <AuxiliarText> Selecione o tipo do container</AuxiliarText>
          <WrapperOptions>
            <OptionsType
              onChange={(value) => {
                SetValues({ ...Values, type: value.target.value });
              }}
            >
              <Options value="20">20</Options>
              <Options value="40">40</Options>
            </OptionsType>
          </WrapperOptions>
          <WrapperBtn>
            <BtnContainer onClick={() => AddingContainer()}>Adicionar Container</BtnContainer>
          </WrapperBtn>
        </Container>
      </Wrapper>
    </>
  );
}
