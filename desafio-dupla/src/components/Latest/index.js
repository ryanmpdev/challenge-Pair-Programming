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
        <div></div>
        <img src={Red} alt="Red Velvet Cake" />
        <p>Red Velvet Cake</p>
      </S.T1>

      <S.T2>
        <div></div>
        <img src={Margherita } alt="Margherita Pizza" />
        <p>Margherita Pizza</p>
      </S.T2>

      <S.T3>
        <div></div>
        <img src={Smoothie } alt="Peanut Smoothie" />
        <p>Peanut Smoothie</p>
      </S.T3>      
      </S.Pratos>  
    </S.Section>
      
  )
}

export default Latest