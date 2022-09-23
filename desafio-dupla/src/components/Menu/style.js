import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img{
    margin-left: 60px;
    width: 68px;
    height: 61px;
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
    color: #373737;
    font-size: 20px;
    list-style: none;
    padding: 10px;
    border: 3px;
    
  }

  li:hover{
    cursor: pointer;
    border: 5px solid black;
  }
`