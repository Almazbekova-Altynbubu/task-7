import styled from "styled-components"
import "./Button.css"

const Button = (props) => {


    return (
      <StyleButton className="button" onClick={props.onClick} style={{padding: props.padding, backgroundColor: props.backgroundColor}} >{props.children}</StyleButton>
    )
  }
  
  export default Button

  const StyleButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  justify-content: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:active {
    outline: 0;
  }
`