import React, { useState } from "react";
import FilteredExpenses from "../filteredExpenses/FilteredExpenses";
import Form from "../form/Form";
import Header from "../layout/Header";
import Validlists from "../validLists/Validlists";
import "./OpenForm.css";
import Chart from "../chart/Chart";
import styled from "styled-components";

const OpenForm = () => {
  const [state, setState] = useState(false);
  const [getDate, setGetDate] = useState([]);
  const [filtered, setFiltered] = useState("2023");

  const getValue = (data) => {
    setGetDate((prevState) => {
      return [...prevState, data];
    });
  };

  const openForm = () => {
    setState((prevState) => !prevState);
  };

  const onChangeDate = (selectedDate) => {
    setFiltered(selectedDate);
  };

  let filter = getDate.filter((expenses) => {
    const newDate = new Date(expenses.date)
    console.log(expenses);
    return newDate.getFullYear().toString() === filtered;
  });


  return (
    <StyleDiv className="parent">
      {state ? (
        <Form onSave={getValue} closeForm={openForm} />
      ) : (
        <Header onClick={openForm} />
      )} 
      <FilteredExpenses selected={filtered} onFiltered={onChangeDate} />
      <Chart filter={filter} />
      <Validlists expenses={filter} /> 
    </StyleDiv>
    
  );
};

export default OpenForm;


const StyleDiv= styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;`
