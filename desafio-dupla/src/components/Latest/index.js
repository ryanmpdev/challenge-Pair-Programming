import React from 'react'
import * as S from './style'
import { Red, Margherita, Smoothie } from '../../images'

function Latest() {
  return (
    <S.Section>
      <h1>LATEST RECIPES</h1>
      <img src={Red} alt="Red Velvet Cake" />
      <p>Red Velvet Cake</p>

      <img src={Margherita } alt="Margherita Pizza" />
      <p>Margherita Pizza</p>
      
      <img src={Smoothie } alt="Peanut Smoothie" />
      <p>Peanut Smoothie</p>
    </S.Section>
  )
}

export default Latest