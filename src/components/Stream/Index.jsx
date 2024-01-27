import React from 'react'
import style from './stream.module.css'

const truncateTitle = (title, maxLength = 50) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title
}

export const getTagsFromTitle = (title) => {
    const regexPatterns = {
        sasp: /\bsasp\b/i,
        ems: /\bems\b/i,
        fa: /(\bfa\b|flashfa)/i,
        wl: /\bwl\b/i,
    }

    return Object.entries(regexPatterns).reduce((acc, [ key, regex ]) => {
        if (title.toLowerCase().match(regex)) {
            acc.push(key.toUpperCase())
        }
        return acc
    }, [])
}

const Stream = ({ streamData }) => {
    const tags = getTagsFromTitle(streamData.title)
    const getTagClassNames = (tag) => {
        const baseTagClass = style.baseTagClass
        const specificTagClass = style[`tag${tag}`]
        return `${baseTagClass} ${specificTagClass}`
    }

    return (
        <div className={style.tvstream__stream__card}>
            <div className={style.tvstream__stream__card_top}>
                <a className={style.tvstream__href} href={`https://www.twitch.tv/${streamData.user_name}`} target="_blank" rel="noopener noreferrer">
                    <img className={style.tvstream__stream__card_thumbnail} src={streamData.thumbnail_url.replace('{width}x{height}', '320x180')} alt="Thumbnail" />
                </a>
                <span className={style.tvstream__stream__card_viewer}>{streamData.viewer_count} spectateurs</span>
            </div>
            <div className={style.tvstream__stream__card_bottom}>
                <img className={style.tvstream__stream__card_avatar} src={streamData.userInfo.profile_image_url} alt="Profile avatar" />
                <div className={style.tvstream__stream__card_userinfo}>
                    <p className={style.tvstream__stream__card_title} title={streamData.title}>{truncateTitle(streamData.title)}</p>
                    <a className={style.tvstream__href} href={`https://www.twitch.tv/${streamData.user_name}`} target="_blank" rel="noopener noreferrer">
                        <p className={style.tvstream__stream__card_username}>{streamData.user_name}</p>
                    </a>
                    <div className={style.tvstream__stream__card_tags}>
                        {tags.map(tag => (
                            <span key={tag} className={getTagClassNames(tag)}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stream
