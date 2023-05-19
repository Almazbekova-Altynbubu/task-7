import React from "react";
import styled from "styled-components";
import "./Input.css";

const Input = (props) => {
  
  return (
    <InputStyle
      className="input"
      style={{
        width: props.width,
        padding: props.padding,
        borderRadius: props.borderRadius,
        border: props.border,
      }}
      type={props.type}
      max={props.max}
      min={props.min}
      placeholder={props.placeholder || "..."}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;


  const InputStyle = styled.input`
    margin: 8px 0;
    display: inline-block;
     border: 1px solid #ccc;
     border-radius: 4px;
     box-sizing: border-box;
  `