import React, { useState } from 'react'
import style from './streamFilter.module.css'
import { FaAngleDown } from 'react-icons/fa'

function StreamFilter({ streams, setFilteredStreams, setFilterApplied }) {
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false)

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

    const handleFilterChange = (e) => {
        const filter = e.target.value
        let newFilteredStreams = streams
        const regexSasp = /\bsasp\b/i
        const regexEms = /\bems\b/i
        const regexFa = /(\bfa\b|\fa\]|\bflashfa\b|\[bflashfa\])/i
        const regexWl = /\bwl\b/i

        switch(filter) {
            case 'alphabetical':
                newFilteredStreams = [ ...newFilteredStreams ].sort((a, b) => a.user_name.toLowerCase().localeCompare(b.user_name.toLowerCase()))
                break
            case 'viewers_asc':
                newFilteredStreams = [ ...newFilteredStreams ].sort((a, b) => a.viewer_count - b.viewer_count)
                break
            case 'viewers_desc':
                newFilteredStreams = [ ...newFilteredStreams ].sort((a, b) => b.viewer_count - a.viewer_count)
                break
            case 'filter_sasp':
                newFilteredStreams = streams.filter(stream => regexSasp.test(stream.title.toLowerCase()))
                break
            case 'filter_ems':
                newFilteredStreams = streams.filter(stream => regexEms.test(stream.title.toLowerCase()))
                break
            case 'filter_fa':
                newFilteredStreams = streams.filter(stream => regexFa.test(stream.title.toLowerCase()))
                break
            case 'filter_wl':
                newFilteredStreams = streams.filter(stream => regexWl.test(stream.title.toLowerCase()))
                break
            case 'reset_filter':
                newFilteredStreams = streams
                break
            default:
                newFilteredStreams = streams
        }

        if (filter !== 'reset_filter') {
            setFilterApplied(true)
        } else {
            setFilterApplied(false)
        }

        setFilteredStreams(newFilteredStreams)
    }

    return (
        <div className={style.tvstream__filter}>
            <select onChange={handleFilterChange} className={style.tvstream__select} onClick={toggleDropdown} onBlur={() => setIsDropdownOpen(false)}>
                <option value="">Trier par ...</option>
                <option value="alphabetical">Ordre alphabétique</option>
                <option value="viewers_asc">Viewers Ascendant</option>
                <option value="viewers_desc">Viewers Descendant</option>
                <option value="filter_sasp">Filtrer par SASP</option>
                <option value="filter_ems">Filtrer par EMS</option>
                <option value="filter_fa">Filtrer par FA</option>
                <option value="filter_wl">Filtrer par WL</option>
                <option value="reset_filter">Réinitialiser le Filtre</option>
            </select>
            <FaAngleDown
                className={`
                    ${style.tvstream__select__icon}
                    ${isDropdownOpen ? style.tvstream__select__icon__rotate : ''}
                `}
            />
        </div>
    )
}

export default StreamFilter
