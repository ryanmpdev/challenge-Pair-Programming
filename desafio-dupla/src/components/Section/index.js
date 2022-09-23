import React from 'react'
import Menu from '../Menu'
import { Background } from '../../images'
import styled from 'styled-components'

export const Section = styled.section`
    margin-top: 36px;
    margin-left: 3%;
    width: 95%;
    height: 1300px;
    background-image: url(${Background});
    background-size: contain;
    background-repeat: no-repeat;
`

function BackgroundImage() {
  return (
    <Section>
        <Menu/>
    </Section>
  )
}

export default BackgroundImage