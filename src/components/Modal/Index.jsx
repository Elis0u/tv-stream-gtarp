import React from 'react'
import style from './modal.module.css'
import { FaXmark } from 'react-icons/fa6'

const Modal = ({ isOpen, close }) => {
    if (!isOpen) return null

    return (
        <div className={style.tvstream__modal} onClick={close}>
            <div className={style.tvstream__modal__content} onClick={e => e.stopPropagation()}>
                <FaXmark className={style.tvstream__modal__closeButton} onClick={close}/>
                <h2>Serveur RP</h2>
                <p>Vous êtes streamer sur Serveur RP, et vous souhaitez que votre stream apparaisse ? Rien de plus simple !</p>
                <p>Pour apparaitre en tant que streamer, vous devez streamer sur Serveur rp en ayant le nom du serveur dans le titre : "serveurrp", "servrp"</p>
                <hr />
                <h3>Les tags</h3>
                <p>Il existe différents tags :</p>
                <div className={style.tvstream__modal__tag}>
                    <span>SASP</span>
                    <span>EMS</span>
                    <span>FA</span>
                    <span>WL</span>
                </div>
                <p>Pour avoir les tags, il vous suffit de l'indiquer dans votre titre de stream. (N'utilisez uniquement les tags qui vous correspondent)</p>
            </div>
        </div>
    )
}

export default Modal
