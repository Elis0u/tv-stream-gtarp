import React from 'react'
import Stream from '@components/Stream/Index'
import style from './streamList.module.css'

function StreamList({ streams }) {
    if (streams.length === 0) {
        return <div className={style.tvstream__no_stream}>Pas de stream pour le moment</div>
    }

    return (
        <div className={style.tvstream__streamlist}>
            {streams.map(stream => (
                <Stream key={stream.id} streamData={stream} />
            ))}
        </div>
    )
}

export default StreamList