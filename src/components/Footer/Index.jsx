import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './footer.module.css'

function Footer() {

    return (
        <>
            <div className={style.tvstream__footer}>
                <footer>
                    <p>Copyright &copy; 2023 - Tous droits reservés - <NavLink to="/cgu">CGU</NavLink></p>
                    <p>Développé par <a href="https://github.com/Elis0u" target="_blank" rel="noopener noreferrer">Elis0u</a></p>
                </footer>
            </div>
        </>
    )
}

export default Footer