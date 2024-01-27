import React, { useState } from 'react'
import Counter from '@components/Counter'
import DateTimeDisplay from '@components/DateTime'
import Modal from '@components/Modal'
import style from './header.module.css'
import { FaInfoCircle } from 'react-icons/fa'

function Header({ count, viewers }) {
    const [ isModalOpen, setModalOpen ] = useState(false)

    const toggleModal = () => setModalOpen(!isModalOpen)

    return (
        <>
            <div className={style.tvstream__top_site}>
                <header className={style.tvstream__header}>
                    <div className={style.tvstream__header__content}>
                        <div className={style.tvstream__header__stats}>
                            <div className={style.tvstream__header__stats_content}>
                                <Counter count={count} viewers={viewers} />
                            </div>
                        </div>
                        <div className={style.tvstream__header__title}>
                            <h1>Serveur rp</h1>
                            <DateTimeDisplay />
                        </div>
                        <div className={style.tvstream__header__button}>
                            <FaInfoCircle className={style.tvstream__header__button_info} onClick={toggleModal}/>
                        </div>
                    </div>
                </header>
            </div>
            <Modal isOpen={isModalOpen} close={toggleModal} />
        </>
    )
}

export default Header
