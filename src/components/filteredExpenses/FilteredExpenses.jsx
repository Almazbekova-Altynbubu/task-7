import styled from "styled-components"
import "./FilteredExpenses.css"

const FilteredExpenses = (props) => {

    const dropdownHandler = (e) => {
        props.onFiltered(e.target.value)
    }

  return (
    <StyleDiv className='parent-container' >
      <StyleDiv2 className='child-container' >
        <StyleLabel>Filtered by Year</StyleLabel>
        <StyleSelect  value={props.selected} onChange={dropdownHandler} >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2021">2021</option>
        </StyleSelect>
      </StyleDiv2>
    </StyleDiv>
  )
}

export default FilteredExpenses

const StyleDiv = styled.div`
  border: 2px solid black;
    background-color: #dcdcdc;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    width: 700px;
    height: 60px;
    margin-top: 30px;
`
const StyleDiv2 = styled.div`
   width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const StyleLabel =styled.label`
   font-size: 25px;
`
const StyleSelect =styled.select`
  width: 150px;
    height: 35px;
    border-radius: 5px;
    font-size: 20px;
`