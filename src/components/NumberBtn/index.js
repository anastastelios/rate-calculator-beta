import React from 'react'
import './styles.css'

const NumberBtn = (props) => {

    const operators = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        'x': function (a, b) { return a * b },
        '/': function (a, b) { return a / b }
    }

    const handleClick = (e) => {
        if (e.target.value === '=') {
            props.lastBtnSetter('E');
            if (props.operatorGetter === "") {
                return props.handleCalculation(prevState => {
                    props.prevNumberSetter(prevState);
                    props.curNumberSetter(prevState);
                    props.operatorSetter('=');
                    return prevState;
                })
            } else if (props.operatorGetter === '=') {
                return props.handleCalculation(prevState => prevState);
            } else {
                return props.handleCalculation(prevState => {
                    const newState = (operators[props.operatorGetter](parseFloat(props.curNumberGetter), parseFloat(prevState))).toString();
                    props.prevNumberSetter(props.curNumberGetter)
                    props.curNumberSetter(newState)
                    props.operatorSetter('=');
                    return newState
                })
            }

        } else {
            props.handleCalculation(prevState => {
                if (props.lastBtnGetter === '') {
                    props.lastBtnSetter('N');
                    if (prevState === '0') {
                        return e.target.value;
                    } else if (prevState.split('').length > 15) {
                        return prevState;
                    } else if (e.target.value === '.') {
                        if (prevState.indexOf('.') < 0) {
                            return prevState + e.target.value;
                        } else {
                            return prevState;
                        }
                    } else {
                        return prevState + e.target.value;
                    }
                } else if (props.lastBtnGetter === 'O' || props.lastBtnGetter === 'E') {
                    props.lastBtnSetter('N');
                    return e.target.value;
                } else if (prevState.split('').length > 15) {
                    return prevState;
                } else {
                    props.lastBtnSetter('N');
                    return prevState + e.target.value;
                }
            })
        }
    }

    return (
        <button onClick={handleClick} value={props.number} className='number_btn'>{props.number}</button>
    )
}

export default NumberBtn