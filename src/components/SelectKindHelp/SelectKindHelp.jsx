import React from 'react'
import KindHelp from './KindHelp/KindHelp'
import './SelectKindHelp.scss'
import hand from '../../assets/img/open-hands.png'
import wallet from '../../assets/img/wallet.png'
import clothes from '../../assets/img/clothes.png'
import heart from '../../assets/img/heart.png'

function SelectKindHelp() {
  return (
    <div className='block-select-kind-help'>
        <KindHelp img={hand}>
            Зробити         
        </KindHelp>
        <KindHelp img={wallet}>
            Фінансова допомога
        </KindHelp>
        <KindHelp img={clothes}>
            Матеріальна допомога
        </KindHelp>
        <KindHelp img={heart}>
            Волонтерство
        </KindHelp>
    </div>
  )
}

export default SelectKindHelp