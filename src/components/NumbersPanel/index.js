import React from 'react'
import './styles.css'
import NumberBtn from '../NumberBtn'

const NumbersPanel = (props) => {

    const arrayOfNumberBtn = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
    return (
        <div className='numbers_panel_container'>
            {arrayOfNumberBtn.map((number, index) => <NumberBtn key={index} handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number={number} />)}
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} curNumberSetter={props.curNumberSetter} prevNumberGetter={props.prevNumberGetter} prevNumberSetter={props.prevNumberSetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} operatorSetter={props.operatorSetter} number='=' />
        </div>
    )
}

export default NumbersPanel