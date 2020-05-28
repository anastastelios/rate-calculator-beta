import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {

  const setInRate = () => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[`${exchangeCurrency}`]
        setRate(baseCurrency === exchangeCurrency ? '1' : rate)
        return rate
      })
  }

  const [calculation, setCalculation] = useState('0');
  const [lastOperator, setLastOperator] = useState('');
  const [lastBtn, setLastBtn] = useState('');
  const [prevNumber, setPrevNumber] = useState('0');
  const [curNumber, setCurNumber] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [exchangeCurrency, setExchangeCurrency] = useState('USD');
  const [rate, setRate] = useState(setInRate());

  const operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    'x': function (a, b) { return a * b },
    '/': function (a, b) { return a / b }
  }

  const handleOperator = (operator) => {
    setLastBtn('O');
    if (lastOperator === "" || lastOperator === "=") {
      return setCalculation(prevState => {
        setPrevNumber(prevState);
        setCurNumber(prevState);
        setLastOperator(operator);
        return prevState;
      })
    } else {
      return setCalculation(prevState => {
        const newState = (operators[lastOperator](parseFloat(curNumber), parseFloat(prevState))).toString();
        setPrevNumber(curNumber)
        setCurNumber(newState)
        setLastOperator(operator);
        return newState
      })
    }
  }

  const updateCalcFromKey = (e) => {
    e.persist();
    setCalculation(prevState => {
      if (e.keyCode === 187 && e.shiftKey || e.keyCode === 107) {
        handleOperator('+')
        setLastOperator('+')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 189 || e.keyCode === 109) {
        handleOperator('-')
        setLastOperator('-')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 56 && e.shiftKey || e.keyCode === 106) {
        handleOperator('x')
        setLastOperator('x')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 191 || e.keyCode === 111) {
        handleOperator('/')
        setLastOperator('/')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 46) {
        setLastBtn('O');
        setCurNumber('0')
        setPrevNumber('0')
        setLastOperator('')
        return setCalculation('0')
      } else if (e.keyCode === 13) {
        if (lastOperator === "") {
          return setCalculation(prevState => {
            setPrevNumber(prevState);
            setCurNumber(prevState);
            setLastOperator('=');
            setLastBtn('E');
            return prevState;
          })
        } else if (lastOperator === '=') {
          setLastBtn('E');
          return setCalculation(prevState => prevState);
        } else {
          return setCalculation(prevState => {
            const newState = (operators[lastOperator](parseFloat(curNumber), parseFloat(prevState))).toString();
            setPrevNumber(curNumber)
            setCurNumber(newState)
            setLastOperator('=');
            setLastBtn('E');
            return newState
          })
        }
      } else if (prevState.split('').length < 16) {
        if (e.keyCode === 190 || e.keyCode === 110) {
          if (prevState.indexOf('.') < 0) {
            return prevState + '.';
          } else {
            return prevState;
          }
        } else if (e.keyCode > 47 && e.keyCode < 58 && !e.shiftKey) {
          if (prevState === '0' || lastBtn === 'O' || lastBtn === 'E') {
            setLastBtn('N');
            return (e.keyCode - 48).toString()
          } else {
            setLastBtn('N');
            return prevState + (e.keyCode - 48).toString()
          }
        } else if (e.keyCode > 95 && e.keyCode < 106) {
          if (prevState === '0' || lastBtn === 'O' || lastBtn === 'E') {
            setLastBtn('N');
            return (e.keyCode - 96).toString()
          } else {
            setLastBtn('N');
            return prevState + (e.keyCode - 96).toString()
          }
        } else {
          return prevState
        }
      } else {
        if (e.keyCode > 47 && e.keyCode < 58 && !e.shiftKey) {
          if (lastBtn === 'O') {
            setCalculation((e.keyCode - 48).toString());
            setLastBtn('N');
            return (e.keyCode - 48).toString()
          } else {
            setLastBtn('N');
            return prevState
          }
        } else if (e.keyCode > 95 && e.keyCode < 106) {
          if (lastBtn === 'O') {
            setCalculation((e.keyCode - 96).toString());
            setLastBtn('N');
            return (e.keyCode - 96).toString()
          } else {
            setLastBtn('N');
            return prevState
          }
        } else {
          return prevState
        }
      }
    })
  }

  return (
    <div className="App" tabIndex="0" onKeyDown={updateCalcFromKey} >
      <Calculator calculation={calculation} setCalculation={setCalculation} lastBtn={lastBtn} setLastBtn={setLastBtn} lastOperator={lastOperator} setLastOperator={setLastOperator} prevNumber={prevNumber} setPrevNumber={setPrevNumber} curNumber={curNumber} setCurNumber={setCurNumber} baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} exchangeCurrency={exchangeCurrency} setExchangeCurrency={setExchangeCurrency} rate={rate} setRate={setRate} />
    </div>
  );
}

export default App;
