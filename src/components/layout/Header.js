import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import "./Header.css";

const Header = (props) => {
  


  return (
    <StyleHeader>
      <StyleDiv className="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <StyleDiv3 className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <Button padding="16px 35px" onClick={props.onClick}>My Expenses</Button>
        </StyleDiv3>
      </StyleDiv>
    </StyleHeader>
  );
};

export default Header;



const StyleHeader = styled.header`
  width: 100%;
  `
  const StyleDiv = styled.div`
  overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
    & a{
      float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;
    }
    & a:hover{
      background-color: #ddd;
    color: black;
    }
    .logo{
      font-size: 25px;
    font-weight: bold;
    }
    `


const StyleDiv3 = styled.div`
float: right;
& .active {
  background-color: dodgerblue;
    color: white;
}
`