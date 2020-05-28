import React from 'react'
import './styles.css'
import NumbersPanel from '../NumbersPanel'
import Title from '../Title'
import Screen from '../Screen'
import OperatorsPanel from '../OperatorsPanel'
import ConverterPanel from '../ConverterPanel'


const Calculator = (props) => {

    return (
        <div className='calculator_container' >
            <Title />
            <Screen show={props.calculation} />
            <ConverterPanel rateGetter={props.rate} rateSetter={props.setRate} changeCalculation={props.setCalculation} baseCurrencySetter={props.setBaseCurrency} baseCurrencyGetter={props.baseCurrency} exchangeCurrencySetter={props.setExchangeCurrency} exchangeCurrencyGetter={props.exchangeCurrency} lastBtnSetter={props.setLastBtn} />
            <div className='panels_container'>
                <NumbersPanel changeCalculation={props.setCalculation} operatorGetter={props.lastOperator} curNumberGetter={props.curNumber} curNumberSetter={props.setCurNumber} prevNumberGetter={props.prevNumber} prevNumberSetter={props.setPrevNumber} lastBtnGetter={props.lastBtn} lastBtnSetter={props.setLastBtn} operatorSetter={props.setLastOperator} />
                <OperatorsPanel changeCalculation={props.setCalculation} prevNumberSetter={props.setPrevNumber} prevNumberGetter={props.prevNumber} operatorSetter={props.setLastOperator} operatorGetter={props.lastOperator} curNumberSetter={props.setCurNumber} curNumberGetter={props.curNumber} lastBtnSetter={props.setLastBtn} lastBtnGetter={props.lastBtn} />
            </div>
        </div>
    )
}

export default Calculator