import React from 'react'
import * as S from './style'
import { Red, Margherita, Smoothie } from '../../images'

function Latest() {
  return (
    <S.Section>
      <S.t1>
        <h1>LATEST RECIPES</h1>
        <img src={Red} alt="Red Velvet Cake" />
        <p>Red Velvet Cake</p>
      </S.t1>

      <S.t2>
        <img src={Margherita } alt="Margherita Pizza" />
        <p>Margherita Pizza</p>
      </S.t2>

      <S.t3>
        <img src={Smoothie } alt="Peanut Smoothie" />
        <p>Peanut Smoothie</p>
      </S.t3>
    </S.Section>
      
  )
}

export default Latest