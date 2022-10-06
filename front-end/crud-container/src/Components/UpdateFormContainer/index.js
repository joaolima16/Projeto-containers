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
  WrapperOptions,
  WrapperBtn,
  ContainerInputs,
  Label,
  InputContainer
} from "./style";
import axios from "axios";
export default function UpdateFormContainer() {
  const [Values, SetValues] = useState([]);

  const UptadingContainer = async () => {
    if (Values.number_container == "" || Values.new_type == "") {
      alert("Please enter a number");
    }
    axios
      .put("http://localhost:3500/UpdateContainer", Values)
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <>
      <Wrapper>
        <Container>
          <TitleContainer> Atualize o seu container </TitleContainer>
          <ContainerInputs>
            <InputContainer>
              <Label>Numero do container atual</Label>
              <Input
                onChange={(value) => {
                  SetValues({
                    ...Values,
                    number_container: value.target.value,
                  });
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>novo numero do container</Label>
              <Input
                onChange={(value) => {
                  SetValues({ ...Values, new_number: value.target.value });
                }}
              />
            </InputContainer>
            <AuxiliarText> Selecione o tipo do container</AuxiliarText>
            <WrapperOptions>
              <OptionsType
                onChange={(value) => {
                  SetValues({ ...Values, new_type: value.target.value });
                }}
              >
                <Options value="20">20</Options>
                <Options value="40">40</Options>
              </OptionsType>
            </WrapperOptions>
          </ContainerInputs>

          <WrapperBtn>
            <BtnContainer onClick={() => UptadingContainer()}>
              Atualizar Container
            </BtnContainer>
          </WrapperBtn>
        </Container>
      </Wrapper>
    </>
  );
}
