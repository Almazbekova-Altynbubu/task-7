import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Button from '../UI/Button'

const Modal = (props) => {
    const drop = <Backdrop onClick={props.onModal} ></Backdrop>


  return (
      <Fragment>
        {createPortal(drop,document.getElementById("backdrop"))}
        {createPortal(
      <Container>
      <h1>Are you sure?</h1>
      <StyleDiv2>
      <Button onClick={props.onDelete}>YES</Button>
      <Button onClick={props.onModal}>NO</Button>
      </StyleDiv2>
      </Container>,
      document.getElementById("modal")
        )}
    </Fragment>
  )
}

export default Modal


const Container = styled.div`
width :400px;
height: 200px;
background-color: #ffffff;
position: fixed;
z-index: 1;
top: 0;
left: 80;
/* margin:auto; */
`

const Backdrop =styled.div`
background-color: #8f2b92;
    opocity:0.90;
    width:100vw;
    height:100vh;
    position:absolute;
    /* z-index: -1; */
    left:0;
    top:0;
`

const StyleDiv2 = styled.div`
width: 250px;
display: flex;
align-items: center;
justify-content: space-between;
`