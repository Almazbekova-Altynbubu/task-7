import React from 'react'
import styled from 'styled-components';
import "./Chart.css"
import ChartBar from './ChartBar'

const Chart = (props) => {
    console.log(props);
    const maxPrice = 10000
    const month = [
        {
            title: "январь",
            price:0
        },
        {
            title: "февраль",
            price: 0
        },
        {
            title: "март",
            price: 0
        },
        {
            title: "апрель",
            price: 0
        },
        {
            title: "май",
            price: 0
        },
        {
            title: "Июнь",
            price: 0
        },
        {
            title: "Июль",
            price: 0
        },
        {
            title: "август",
            price: 0
        },
        {
            title: "сентябрь",
            price: 0
        },
        {
            title: "октябрь",
            price: 0
        },
        {
            title: "ноябрь",
            price: 0
        },
        {
            title: "декабрь",
            price: 0
        },
    ]

    props.filter.map((el)=>{
        console.log(el.date);
        const newDate = new Date(el.date).getMonth()
        console.log(newDate);
        month[newDate].price += +el.price
    })

    console.log(month);


  return (
    <StyleDiv className='chart'>
      {month.map((el)=>{
        return <ChartBar title={el.title} price={el.price} maxPrice={maxPrice} />
      })}
    </StyleDiv>
  )
}

export default Chart

const StyleDiv = styled.div`
 width: 80%;
    background-color: blanchedalmond;
    padding: 30px 20px 0px 20px;
    display: flex;
    justify-content: space-between;`