import React from 'react'
import Header from '../../Components/Header';
import Cards from '../../Components/Card';
import GlobalStyle from './GlobalStyle';
import { Wrapper,Image } from './style';
import Footer from '../../Components/Footer';
import ButtonOptions from '../../Components/OptionsContainer';
import Imagem from '../../assets/Container.png'
export default function Home() {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <ButtonOptions />
         {/* <Image alt="img" src={Imagem}></Image> */}
        <Cards />
        <Footer />
      </Wrapper>
    </>
  )
}
