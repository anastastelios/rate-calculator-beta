import React from 'react'
import './styles.css'
import CurrencySelect from '../CurrencySelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import ConverterBtn from '../ConvertBtn'

const ConverterPanel = (props) => {

    const invertConversion = () => {
        const inversion = (a, b) => {
            props.exchangeCurrencySetter(a);
            props.baseCurrencySetter(b);
        }
        inversion(props.baseCurrencyGetter, props.exchangeCurrencyGetter);
    }

    return (
        <div className='rate_calculator'>
            <div className='base_currency'>
                <CurrencySelect type='base' baseCurrencySetter={props.baseCurrencySetter} baseCurrencyGetter={props.baseCurrencyGetter} exchangeCurrencySetter={props.exchangeCurrencySetter} exchangeCurrencyGetter={props.exchangeCurrencyGetter} rateSetter={props.rateSetter} rateGetter={props.rateGetter} />
            </div>
            <div className='exchange_icon'>
                <FontAwesomeIcon onClick={invertConversion} style={{ 'cursor': 'pointer' }} size='2x' icon={faSync} />
            </div>
            <div className='exchange_currency'>
                <CurrencySelect type='exchange' baseCurrencySetter={props.baseCurrencySetter} baseCurrencyGetter={props.baseCurrencyGetter} exchangeCurrencySetter={props.exchangeCurrencySetter} exchangeCurrencyGetter={props.exchangeCurrencyGetter} rateSetter={props.rateSetter} rateGetter={props.rateGetter} />
            </div>
            <div className='convert_btn'>
                <ConverterBtn changeCalculation={props.changeCalculation} baseCurrencyGetter={props.baseCurrencyGetter} exchangeCurrencyGetter={props.exchangeCurrencyGetter} rateSetter={props.rateSetter} rateGetter={props.rateGetter} lastBtnSetter={props.lastBtnSetter} />
            </div>
        </div>
    )
}

export default ConverterPanel