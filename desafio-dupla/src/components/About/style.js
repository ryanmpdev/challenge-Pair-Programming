import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    display:flex;
    height: 800px;
    margin-top: 290px;
`
export const Image = styled.div`
    width: 50%;
    height: 800px;
    background-color: beige;

 img{
    width: 100%;
    height: 800px;
 }
`

export const Text = styled.div`
   width: 50%;
   height: 800px;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;

   h1{
      color: #373737;
      font-size: 40px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   }

   div{
      height: 3px;
      width: 71px;
      margin-top: 30px;
      border-radius: 4px;
      background-color: #373737;
   }

   p {
      width: 80%;
      color: #373737;
      font-size: 24px;
      margin-top: 90px;
   }
`