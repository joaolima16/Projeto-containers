import React from 'react'
import imagem from "../../assets/Container.png"
import teste from '../../assets/suquito.jpeg'
import { HeaderWrapper,ImageContainer, Teste } from './style'
export default function Header() {
  return (
    <>
    <HeaderWrapper />
    <ImageContainer src={teste}/>
    </>
  )
}
