import React from 'react'
import styled from 'styled-components';
import "./ChartBar.css"

const ChartBar = ({title, price, maxPrice}) => {

    const a = price * 100 / maxPrice
    console.log(a);
    
   
  return (
    <div>
      <StyleDiv className='chart-bar'>
        <StyleDiv2 style={{height: `${a}%`}} className='back-chart'></StyleDiv2>
      </StyleDiv>
      <p>{title}</p>
    </div>
  )
}

export default ChartBar

const StyleDiv =styled.div`
height: 150px;
width: 30px;
border-radius: 20px;
background-color: aqua;
display: flex;
flex-direction: column;
justify-content: end;
overflow: hidden;`

const StyleDiv2 =styled.div`
background-color: blue;
width: 100%;
`