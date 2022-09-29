import styled from "styled-components";

export const Section = styled.section`
 height: 700px;
 width: 100%;
 background-color: #DFE4DE;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 h1 {
    font-size: 40px;
    color: #373737;
 }

 p{
    font-size: 32px;
    color: #373737;
    margin-top: 13px;
 }

 form{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin-top: 45px;
 }

 input{
    width: 100%;
    height: 60px;
    padding-left: 20px;
    border: none;
    background-color: #EFF1EE;
    outline: none;
 }

 input::-moz-placeholder {
   font-size: 20px;
   color: #707070;
   margin-left: 5%;
 }

 button{
    width: 200px;
    height: 70px;
    font-size: 24px;
    color: #707070;
    border:6px solid #373737;
    margin-top: 40px;
 }
 `