import React from 'react'
import GlobalStyle from './global'
import styled from 'styled-components'

import { Footer, Latest, About, Subcribe, Section} from './components'

export const Global = styled.div`
 align-items: center;
 display: flex;
 flex-direction: column;
 background-color: #F2F4F1;
`

export default function App() {
  return (
    <Global>
      <Section/>
      <Latest/>
      <About/>
      <Subcribe/>
      <Footer/>
      <GlobalStyle/>
    </Global>
  )
}

