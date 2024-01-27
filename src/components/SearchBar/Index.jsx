import React, { useState } from 'react'
import style from './searchBar.module.css'

const SearchBar = ({ onSearch }) => {
    const [ searchTerm, setSearchTerm ] = useState('')

    const handleChange = (event) => {
        const term = event.target.value
        setSearchTerm(term)
        onSearch(term)
    }

    return (
        <div className={style.tvstream__search}>
            <input
                className={style.tvstream__search_bar}
                type="text"
                placeholder="Recherche par streamer..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar
