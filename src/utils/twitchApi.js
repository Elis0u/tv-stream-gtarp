const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export async function fetchAccessToken() {
    try {
        const response = await fetch('https://id.twitch.tv/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
        })

        const data = await response.json()
        return data.access_token
    } catch (error) {
        console.error('Error while retrieving the access token : ', error)
    }
}

export async function fetchAllStreamsGTA(accessToken, cursor = '') {
    let allStreams = []
    let hasNextPage = true
    const regex = /flashback|flash fa|flashfa/i

    console.time('fetchStreamsTime')

    while (hasNextPage) {
        const response = await fetch(`https://api.twitch.tv/helix/streams?game_id=32982&language=fr&first=100&after=${cursor}`, {
            method: 'GET',
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${accessToken}`,
            },
        })

        const data = await response.json()

        const streamsProcessed = await Promise.all(data.data
            .filter(stream => regex.test(stream.title))
            .filter((stream, index, self) => index === self.findIndex((t) => t.user_id === stream.user_id))
            .map(async (stream) => {
                const userInfo = await fetchUserInfo(accessToken, stream.user_id)
                return { ...stream, userInfo: userInfo || {} }
            })
        )

        allStreams = [ ...allStreams, ...streamsProcessed ]

        if (data.pagination && data.pagination.cursor) {
            cursor = data.pagination.cursor
        } else {
            hasNextPage = false
        }
    }

    console.timeEnd('fetchStreamsTime')

    return allStreams
}


export async function fetchUserInfo(accessToken, userId) {
    try {
        const response = await fetch(`https://api.twitch.tv/helix/users?id=${userId}`, {
            method: 'GET',
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${accessToken}`,
            },
        })

        const data = await response.json()
        return data.data[0]
    } catch (error) {
        console.error('Error while retrieving user information : ', error)
    }
}