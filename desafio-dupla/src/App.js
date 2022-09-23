import React from 'react'
import GlobalStyle from './global'
import { Menu, Footer, Latest, About, Subcribe} from './components'

export default function App() {
  return (
    <div>
      <Menu/>
      <Latest/>
      <About/>
      <Subcribe/>
      <Footer/>
      <GlobalStyle/>
    </div>
  )
}

