import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { fetchAccessToken, fetchAllStreamsGTA } from '@utils/twitchApi'
import StreamList from '@components/StreamList'
import Header from '@components/Header'
import Footer from '@components/Footer'
import SearchBar from '@components/searchBar'
import BackToTopButton from '@components/BackToTop'
import StreamFilter from '@components/StreamFilter'
import '@/index.css'

const Home = () => {
    const [ streams, setStreams ] = useState([])
    const [ filteredStreams, setFilteredStreams ] = useState([])
    const [ filterApplied, setFilterApplied ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function fetchStreams() {
            try {
                setLoading(true)
                const accessToken = await fetchAccessToken()
                let allStreams = await fetchAllStreamsGTA(accessToken)
                // Filter to avoid errors : Unique key
                allStreams = allStreams.filter((stream, index, self) => index === self.findIndex((t) => t.user_id === stream.user_id))
                setStreams(allStreams)
            } catch (error) {
                console.error('Error retrieving streams: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchStreams()
    }, [])

    const count = useMemo(() => streams.reduce((acc, stream) => acc + stream.viewer_count, 0), [ streams ])

    const Loader = () => {
        return <div className="loader"></div>
    }

    const handleSearch = useCallback((searchTerm) => {
        setFilteredStreams(searchTerm ? streams.filter(s => s.user_name.toLowerCase().startsWith(searchTerm.toLowerCase())) : [])
    }, [ streams ])

    return (
        <div className="App">
            <Header count={streams.length} viewers={count} />
            <main>
                <div className="tvstream__sidebar">
                    <SearchBar onSearch={handleSearch} />
                    <StreamFilter
                        streams={streams}
                        setFilteredStreams={setFilteredStreams}
                        setFilterApplied={setFilterApplied}
                    />
                </div>
                {loading ? (
                    <Loader />
                ) : filterApplied && filteredStreams.length === 0 ? (
                    <div className="tvstream__no-stream">Pas de stream correspondant</div>
                ) : (
                    <StreamList streams={filteredStreams.length > 0 ? filteredStreams : streams} />
                )}
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    )
}

export default Home
