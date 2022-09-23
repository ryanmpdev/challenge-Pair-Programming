import React from 'react'
import * as S from './style'
import { Rc } from '../../images'

function Menu() {
  return (
    
    <S.Container>
      <img src={Rc} alt="Logo" />
      <nav>    
      <ul>
        <li>ABOUT</li>
        <li>RECIPES</li>
        <li>SUBSCRIBE</li>
      </ul>
      </nav>
    </S.Container>
  )
}

export default Menu