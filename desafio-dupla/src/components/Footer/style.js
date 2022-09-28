import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    display: flex;
    height: 339px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const Section = styled.div`
      width: 90%;
    display: flex;
    height: 339px;
    align-items: center;
    justify-content: space-between;
`

export const Redes = styled.div`
    width: 276px;
    display: flex;
    justify-content: space-between;

    img{
        width: 50px;
    }
`

export const Infos = styled.div`

ul{
    width: 450px;
    height: 10vh;
    display: flex;
    margin-right: 54px;
    align-items: center;
    justify-content: space-between;
  }

  li{
    border: 3px;
    padding: 10px;
    color: #373737;
    font-size: 20px;
    list-style: none;
    
  }

`

export const End = styled.div`
 width: 100%;
 height: 65px;
 background-color:#446061;
 align-items: center;
 display: flex;
 justify-content: center;

 P{
    font-size: 17px;
    color: #FFFFFF;
 }
`