import React from 'react'
import * as S from './style'
import { Red, Margherita, Smoothie } from '../../images'

function Latest() {
  return (
    <S.Section>
        <S.t0>
        <h1>LATEST RECIPES</h1>
        <div></div>
        </S.t0>
      <S.Pratos>
      <S.T1>
        <img src={Red} alt="Red Velvet Cake" />
        <div></div>
        <p>Red Velvet Cake</p>
      </S.T1>

      <S.T2>
        <img src={Margherita } alt="Margherita Pizza" />
        <div></div>
        <p>Margherita Pizza</p>
      </S.T2>

      <S.T3>
        <img src={Smoothie } alt="Peanut Smoothie" />
        <div></div>
        <p>Peanut Smoothie</p>
      </S.T3>      
      </S.Pratos>  
    </S.Section>
      
  )
}

export default Latest