import React from 'react'
import styled from 'styled-components';
import "./FormatDate.css"

const FormatDate = (props) => {
    console.log(props);
    const newDate = new Date(props.date)
    const month = newDate.toLocaleString("en-US", {month: "long"})
    const day = newDate.toLocaleString("en-US", {day: "2-digit"})
    const year = newDate.getFullYear()


   
  return (
    <StyleDiv className='parent-date' >
      <b>{month}</b>
      <b>{day}</b>
      <b>{year}</b>
    </StyleDiv>
  )
}

export default FormatDate

const StyleDiv =styled.div`
border: 3px solid #1E90FF;
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 20px;
border-radius: 10px;
background-color: black;
color: white;
`