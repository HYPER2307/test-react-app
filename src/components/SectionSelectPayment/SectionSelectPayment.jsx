import './SectionSelectPayment.scss'
import React from 'react'
import visa from '../../assets/img/visa.png'
import mastercard from '../../assets/img/mastercard.png'
import PaymentMetod from './PaymentMetod/PaymentMetod'

function SectionSelectPayment() {
    return (
        <div className='container'>
            <div className='section-select-payment'>
                <label>Спосіб оплати</label>
                <div className='paymant-metod'>
                    <PaymentMetod img={mastercard} img2={visa}>
                        Картка Visa Mastercard
                    </PaymentMetod>
                    <PaymentMetod img={mastercard} img2={visa}>
                        Приват 24
                    </PaymentMetod>
                    <PaymentMetod img={mastercard} img2={visa}>
                        Термінали України
                    </PaymentMetod>
                </div>
                <div className='paymant-metod'>
                    <PaymentMetod img={mastercard} img2={visa}>
                        WebMoney
                    </PaymentMetod>
                    <PaymentMetod img={mastercard} img2={visa}>
                        PayPal
                    </PaymentMetod>
                </div>
            </div>
            <div className='card-number'>
                <label>Введіть наступні дані</label>
                <div className='card'>
                    <label>Номер картки</label>
                    <div className='number'>
                        <input type="text" name='card' />
                        <input type="text" name='card' />
                        <input type="text" name='card' />
                        <input type="text" name='card' />
                    </div>
                    <div className='card-security'>
                        <div>
                            <label>Термін дії</label>
                            <input type="text" name='date' />
                        </div>
                        <div>
                            <label>CVC/CVV</label>
                            <input type="text" name='cvc/cvv' />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SectionSelectPayment