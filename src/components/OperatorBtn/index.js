import React from 'react'
import './styles.css'

const OperatorBtn = (props) => {

    const operators = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        'x': function (a, b) { return a * b },
        '/': function (a, b) { return a / b }
    }

    const handleOperator = (operator) => {
        props.lastBtnSetter('O');
        if (props.operatorGetter === "" || props.operatorGetter === "=") {
            return props.handleCalculation(prevState => {
                props.prevNumberSetter(prevState);
                props.curNumberSetter(prevState);
                props.operatorSetter(operator);
                return prevState;
            })
        } else {
            return props.handleCalculation(prevState => {
                const newState = (operators[props.operatorGetter](parseFloat(props.curNumberGetter), parseFloat(prevState))).toString();
                props.prevNumberSetter(props.curNumberGetter)
                props.curNumberSetter(newState)
                props.operatorSetter(operator);
                return newState
            })
        }
    }

    const handleClick = (e) => {
        if (e.target.value === 'AC') {
            props.lastBtnSetter('O');
            props.curNumberSetter('0')
            props.prevNumberSetter('0')
            props.operatorSetter('')
            return props.handleCalculation('0')
        } else if (props.lastBtnGetter !== 'O') {
            handleOperator(e.target.value);
        } else {
            props.operatorSetter(e.target.value);
        }
    }

    return (
        <button onClick={handleClick} value={props.operator} className={props.cancel ? 'cancel_btn' : 'operator_btn'}>{props.operator}</button>
    )
}

export default OperatorBtn