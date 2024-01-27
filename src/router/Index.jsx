import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import CGU from '@pages/CGU/Index'
import Home from '@pages/Home/Index'

const Router = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [ location.pathname ])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cgu" element={<CGU />} />
        </Routes>
    )
}

export default Router
