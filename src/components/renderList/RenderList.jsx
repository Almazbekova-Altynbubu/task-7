import React, { useState } from "react";
import FormatDate from "../formatDate/FormatDate";
import Modal from "../modalka/Modal";
import Button from "../UI/Button";
import style from "./RenderList.module.css"

const RenderList = (props) => {
  console.log(props);

  const [lists, setlists] = useState([props])
console.log(lists);

  const deleteHandler =(id)=>{
    const newList= lists.filter((el) => {
      console.log(el);
      if(el.id !== id){
        return [el]
      }
    })
    setlists(newList)
    console.log(newList);
  }


const [isModal, setIsModal] = useState(false)

const modalHandler=()=>{
  setIsModal(true)

}

const closeModal=()=>{
  setIsModal(false)
}

  return (
    <div  className={style.container_elem} >
      {lists.map((props)=>{
        return(
<div className={style.parentLists}>
            <b className={style.elem_name} >{props.name}</b>
            <b className={style.elem_price}>{props.price}</b>
            <FormatDate date={props.date} />
            <Button onClick={modalHandler} padding="16px 35px">Delete</Button>
            {/* <Button onClick={() => deleteHandler(props.id)} padding="16px 35px">Delete</Button> */}
            {/* <Button onClick={() => console.log(props.id)} padding="16px 35px">Delete</Button> */}
              { isModal && <Modal onModal = {closeModal}  onDelete = {() => deleteHandler(props.id)}/>}
          </div>
        )
      })}
          
    </div>
  );
};

export default RenderList;

