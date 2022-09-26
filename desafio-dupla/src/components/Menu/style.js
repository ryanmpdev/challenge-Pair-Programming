import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img{
    width: 68px;
    height: 61px;
    margin-left: 60px;
  }

  ul{
    width: 500px;
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

  li:hover{
    cursor: pointer;
    border: 5px solid black;
  }
`