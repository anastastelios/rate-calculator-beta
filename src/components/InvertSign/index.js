import React from 'react'
import './styles.css'

const InvertSign = (props) => {
    const changeSign = () => {
        props.handleCalculation(prevState => {
            if (props.lastBtnGetter === 'O') {
                props.curNumberSetter((-prevState).toString());
                return (-prevState).toString()
            }
            props.prevNumberSetter((-prevState).toString());
            return (-prevState).toString()
        })
    }
    return (
        <button onClick={changeSign} className='invert_btn'>+/-</button>
    )
}

export default InvertSign