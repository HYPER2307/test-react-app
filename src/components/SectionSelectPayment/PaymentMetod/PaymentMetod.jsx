import React from 'react'

function PaymentMetod({children, img, img2}) {
    return (
        <div className='block-payment-metod'>
            <button className='metod'>
                <div className='block'>
                    <img src={img} alt="cart" />
                    <img src={img2} alt="cart" />
                </div>
                {children}
            </button>
        </div>
    )
}

export default PaymentMetod