import React from 'react'
import Menu from '../Menu'
import { Background } from '../../images'
import styled from 'styled-components'

export const Section = styled.section`
    width: 95%;
    height: 1250px;
    margin-top: 36px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${Background});

    h1{
      color: #373737;
      width: 50%;
      margin-top: 30%;
      margin-left:25%;
      font-size: 150px;
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