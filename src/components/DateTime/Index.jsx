import React, { useState, useEffect } from 'react'

function DateTimeDisplay() {
    const [ currentDateTime, setCurrentDateTime ] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const formatDateTime = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = date.toLocaleDateString('fr-FR', options)
        const formattedTime = date.toLocaleTimeString('fr-FR', { hour12: false })

        return `${formattedDate} - ${formattedTime}`
    }

    return (
        <div>
            {formatDateTime(currentDateTime)}
        </div>
    )
}

export default DateTimeDisplay