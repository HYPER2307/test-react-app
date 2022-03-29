import React from 'react'

function KindHelp({ children, img }) {
    return (
        <div className='kind-help-z'>
            <button className='img-block'>
                <img src={img} alt="" />
            </button>
            <div className='text-help'>
                <div className='text'>{children}</div>
            </div>
        </div>
    )
}

export default KindHelp