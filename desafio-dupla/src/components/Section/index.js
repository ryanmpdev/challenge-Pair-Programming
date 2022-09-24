import React from 'react'
import Menu from '../Menu'
import { Background } from '../../images'
import styled from 'styled-components'

export const Section = styled.section`
    margin-top: 36px;
    width: 95%;
    height: 1250px;
    background-image: url(${Background});
    background-size: contain;
    background-repeat: no-repeat;

    h1{
      color: #373737;
      width: 50%;
      font-size: 150px;
      margin-left:25%;
      margin-top: 30%;
    }
`

function BackgroundImage() {
  return (
    <Section>
        <Menu/>
        <h1>RECIPES</h1>
    </Section>
  )
}

export default BackgroundImage