import React from 'react'
import { useState } from 'react';
import { Container, Wrapper, TitleContainer, Input, OptionsType, AuxiliarText, Options,BtnContainer } from './style'
import axios from 'axios';
export default function DeleteFormContainer() {
    const [Values,SetValues] = useState([]);

    const DeletingContainer = async() =>{
        console.log(Values)
        axios.delete("http://localhost:3500/DeleteContainer",Values)
        .then((response)=>{console.log(response.data)})
        .catch((err)=>{console.log(err)})
    }
    return (

        <>
            <Wrapper>
                <Container>
                    <TitleContainer> Delete o seu container </TitleContainer>
                    <Input placeholder='Insira o numero do container que deseja excluir' onChange={(value)=>{SetValues({...Values,number_container:value.target.value})}}/>
                    <BtnContainer onClick={()=>DeletingContainer()} />
                </Container>
      
            </Wrapper>
        </>
    )
}
