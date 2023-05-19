import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";



const Form = (props) => {
  // const props = {
  //   onSave: getValue
  // }
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const priceChange = (e) => {
    setPrice(e.target.value);
    console.log(name);
  };

  const phoneNumChange = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const cancelHandler = () => {
    props.closeForm();
  };

  const addListHandler = () => {
    if(name !== "" && price !==""){
      const obj = {
        name,
        price,
        date: date,
        id: Math.random().toString(),
      };
      props.onSave(obj);
    }
    setName("");
    setPrice("");
    setDate("");
  };

 
  return (
    <StyleForm onSubmit={onSubmit}>
      <StyleDiv>
        <StyleLabel htmlFor="name-expense">NAME :</StyleLabel>
        <Input
          value={name}
          onChange={nameChange}
          width="70%"
          padding="12px 20px"
          placeholder="name-expense"
          id="name-expense"
        />
      </StyleDiv>
      <StyleDiv>
        <StyleLabel htmlFor="price-expense">PRICE :</StyleLabel>
        <Input
          value={price}
          onChange={priceChange}
          width="70%"
          padding="12px 20px"
          placeholder="price-expense"
          type="text"
          id="price-expense"
        />
      </StyleDiv>
      <StyleDiv>
        <StyleLabel htmlFor="date">DATE :</StyleLabel>
        <Input
          value={date}
          onChange={phoneNumChange}
          width="70%"
          padding="12px 20px"
          type="date" min="2021-01-01" max="2024-12-31"
          id="date"
        />
      </StyleDiv>
      <StyleDiv2>
        <Button onClick={addListHandler} padding="16px 35px">
          ADD
        </Button>
        <Button onClick={cancelHandler} padding="16px 35px">
          CANCEL
        </Button>
      </StyleDiv2>
    </StyleForm>
  );
};

export default Form;

const StyleForm = styled.form`
width: 700px;
height: 400px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
border-radius: 10px;
background-color: #dcdcdc;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 20px;
`
const StyleDiv = styled.div`
width: 500px;
display: flex;
align-items: center;
justify-content: space-between;
`
const StyleLabel = styled.label`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const StyleDiv2 = styled.div`
width: 250px;
display: flex;
align-items: center;
justify-content: space-between;
`