import React, { useState } from 'react'
import styled from 'styled-components'

const StyleDiv = styled.div`
background-color :red;
height: 200px;
width:200px
`





const LiftingUp = (props) => {
   const [state, setState] = useState("text")

   const inpValue=(e)=>{
        setState(e.target.value)
   }
    
    const saveData=()=>{
        const obj ={
            name: state,
            id: Math.random()
        }
        props.onNewData(obj)
    } 
  return (
    <StyleDiv>
      <input onChange={inpValue} type="text" />
      <button onClick={saveData}>Add</button>
    </StyleDiv>
  )
}

export default LiftingUp