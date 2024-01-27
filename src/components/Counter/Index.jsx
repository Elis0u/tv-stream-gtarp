import React from 'react'
import style from './counter.module.css'

function Counter({ count, viewers }) {
    return (
        <>
            <div className={style.tvstream__counter}>
                <p>Streamers en ligne : <span className="counter">{count}</span></p>
                <p>Spectateur total : {viewers}</p>
            </div>
        </>
    )
}

export default Counter
