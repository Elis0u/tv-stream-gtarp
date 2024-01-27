import React, { useState, useEffect } from 'react'
import style from './BackToTopButton.module.css'
import { FaArrowUp } from 'react-icons/fa6'

function BackToTopButton() {
    const [ isVisible, setIsVisible ] = useState(false)

    const toggleVisibility = () => {
        window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        isVisible && (
            <div className={style.backToTopButton} onClick={scrollToTop}>
                <FaArrowUp />
            </div>
        )
    )
}

export default BackToTopButton
