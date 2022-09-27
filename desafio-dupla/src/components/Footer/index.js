import React from 'react'
import * as S from './style'
import { Instagram, Pinterest, Facebook, Twitter } from '../../images'

function Footer() {
  return (
    <S.Container>
    <S.Redes>
      <img src={Instagram} alt="instagram" />
      <img src={Twitter} alt="Twiter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Pinterest} alt="Pinterest" />
    </S.Redes>
   </S.Container>
  )
}

export default Footer