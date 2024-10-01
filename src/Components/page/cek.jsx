import React, { useState, useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import Style from '../../Styles/cek.css'

const Cek = () => {
    const client_id = 'd4f01a3e028449c691f3af67b3a58ae4';
    const client_secret = 'bfa51632ded64735a8f19cb8d0e2c1c2';

    const [token, setToken] = useState('');
    const [track, setTrack] = useState(null);
    const [error, setError] = useState('');

    const getToken = async () => {
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: querystring.stringify({
                grant_type: 'client_credentials',
                client_id: client_id,
                client_secret: client_secret,
            }),
        };

        try {
            const response = await axios(authOptions);
            if (response.status === 200) {
                setToken(response.data.access_token);
                console.log('Access Token:', response.data.access_token, '\n', 'Expires in:', response.data.expires_in, 'seconds');
            } else {
                setError(`Failed to retrieve access token: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            setError(`Error retrieving access token: ${error.message}`);
        }
    };

    const getTrack = async (id) => {
        if (!token) {
            await getToken();
        }

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.spotify.com/v1/tracks/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios(config);
            if (response.status === 200) {
                setTrack(response.data);
            } else {
                setError(`Failed to retrieve track: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            setError(`Error retrieving track: ${error.message}`);
        }
    };

    useEffect(() => {
        const trackId = '11dFghVXANMlKmJXsNCbNl';
        getTrack(trackId);
    }, [token]);



    return (
        <div>
            {/* {error && <div>Error: {error}</div>} */}
            {track ? (
                <div className='spotify-track'>
                    <h1>{track.name}</h1>
                    <p>{track.artists.map(artist => artist.name).join(', ')}</p>
                    <img src={track.album.images[0].url} alt={track.name} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Cek;
