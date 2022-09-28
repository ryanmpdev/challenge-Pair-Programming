import React from 'react'
import * as S from './style'
import { Instagram, Pinterest, Facebook, Twitter } from '../../images'

function Footer() {
  return (
    <S.Container>
      <S.Section>
    <S.Redes>
      <img src={Instagram} alt="instagram" />
      <img src={Twitter} alt="Twiter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Pinterest} alt="Pinterest" />
    </S.Redes>
    <S.Infos>
      <nav>    
      <ul>
        <li>ABOUT</li>
        <li>RECIPES</li>
        <li>SUBSCRIBE</li>
      </ul>
      </nav>
    </S.Infos>
      </S.Section>
    <S.End>
      <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
    </S.End>
   </S.Container>
  )
}

export default Footer