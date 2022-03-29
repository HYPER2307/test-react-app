import React from 'react'
import './Form.scss'
import '../../assets/styles/media.scss';


function Form() {
  return (
    <div className='container-form'>
      {/* First container */}
      <div className='container-section'>
        <div className='input-split'>
          <div className='container-input'>
            <p>Ім'я</p>
            <input type="text" name='name' />
          </div>
          <div className='container-input'>
            <p>Фамілія</p>
            <input type="text" name='surname' />
          </div>
        </div>
        <div className='container-input'>
          <p>Назва компанії, організації</p>
          <input type="text" name='company' />
        </div>
        <div className='container-input'>
          <p>Email-адрес</p>
          <input type="text" name='email' />
        </div>
        <div className='container-input'>
          <p>Номер телефону</p>
          <input type="text" name='telephone' />
        </div>
      </div>
      {/* First container */}

      <div className='input-logo'>
        <label>+</label>
        <label>Логотип</label>
      </div>


      {/* Second container */}
      <div className='container-section'>
        <div className='container-input'>
          <p>Країна</p>
          <input type="text" name='country' />
        </div>
        <div className='input-split'>
          <div className='container-input'>
            <p>Місто</p>
            <input type="text" name='city' />
          </div>
          <div className='container-input'>
            <p>Штат, район</p>
            <input type="text" name='district' />
          </div>
        </div>
        <div className='container-input'>
          <p>Адреса</p>
          <input type="text" name='adress' />
        </div>
        <div className='input-split'>
          <div className='container-input'>
            <p>Поштовий індекс</p>
            <input type="text" name='postalcode' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form