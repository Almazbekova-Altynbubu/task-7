import React from 'react'
import styled from 'styled-components';
import RenderList from '../renderList/RenderList';
import Button from '../UI/Button';
import "./ValidLists.css"

const Validlists = (props) => {
    console.log(props);
    if(props.expenses.length === 0 ){
        return (
            <StyleDiv 
            // className='container-error' 
            >
                <h2>Not found expenses</h2>
            </StyleDiv>
        )
    }

  return (
    <div>
         {props.expenses.map((expenses) => {
          return (
            <RenderList
              id={expenses.id}
              date={expenses.date}
              name={expenses.name}
              price={expenses.price}
              />
            
          );
        })}
    </div>
  )
}

export default Validlists

const StyleDiv =styled.div`
  padding: 20px 85px;
    border: 2px solid;
    background-color: #dcdcdc;
    border-radius: 10px;
    margin-top: 25px;`