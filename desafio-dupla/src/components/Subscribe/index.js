import React from 'react'
import * as S from './style'


function Subcribe() {
  return (
     <S.Section>
      <h1>SUBSCRIBE</h1>
      <p>Sign up for newsletter</p>
      <form>
        <input type="text" placeholder='Your Email'/>
        <button>SUBMIT</button>
      </form>
     </S.Section>
  )
}

export default Subcribe