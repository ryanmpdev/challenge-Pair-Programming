import React from 'react'
import GlobalStyle from './global'
import { Footer, Latest, About, Subcribe, Section} from './components'

export default function App() {
  return (
    <div>
      <Section/>
      <Latest/>
      <About/>
      <Subcribe/>
      <Footer/>
      <GlobalStyle/>
    </div>
  )
}

