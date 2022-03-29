import React from 'react'
import './MainPage.scss'
import SwitchButton from '../components/SwitchButton/SwitchButton'
import Title from '../components/Title/Title'
import Form from '../components/Form/Form'
import SelectKindHelp from '../components/SelectKindHelp/SelectKindHelp'
import SectionSelectPayment from '../components/SectionSelectPayment/SectionSelectPayment'
import ButtonFooter from '../components/ButtonFooter/ButtonFooter'
import '../assets/styles/media.scss'


function MainPage() {
  return (
    <body>
      <div className='Header'>
        <Title>
          Заповніть форму
        </Title>
        <SwitchButton />
        <div className='section-form'>
          <Form />
        </div>
      </div>
      <div className='kind-help'>
        <Title titleDesc='Ви можете змінити вид допомоги'>
          Види допомоги
        </Title>
      </div>
      <div className='section-kind-help'>
        <SelectKindHelp />
      </div>
        <SectionSelectPayment />
        <ButtonFooter/>
    </body>
  )
}

export default MainPage