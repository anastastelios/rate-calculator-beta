import React from 'react'
import './styles.css'
import OperatorBtn from '../OperatorBtn'
import InvertSign from '../InvertSign'

const OperatorsPanel = (props) => {
    const arrayOfOperators = ['/', 'x', '-', '+']
    return (
        <div className='operators_panel_container'>
            <InvertSign handleCalculation={props.changeCalculation} curNumberSetter={props.curNumberSetter} prevNumberSetter={props.prevNumberSetter} lastBtnGetter={props.lastBtnGetter} />
            <OperatorBtn handleCalculation={props.changeCalculation} curNumberSetter={props.curNumberSetter} prevNumberSetter={props.prevNumberSetter} operatorSetter={props.operatorSetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} cancel='true' operator='AC' />
            {arrayOfOperators.map((operator, index) => <OperatorBtn key={index} handleCalculation={props.changeCalculation} prevNumberSetter={props.prevNumberSetter} prevNumberGetter={props.prevNumberGetter} operatorSetter={props.operatorSetter} operatorGetter={props.operatorGetter} curNumberSetter={props.curNumberSetter} curNumberGetter={props.curNumberGetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} operator={operator} />)}
        </div>
    )
}

export default OperatorsPanel