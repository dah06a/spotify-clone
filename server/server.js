const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '2290313e69ab4da8b4c3ddd6aa1bc375',
        clientSecret: 'fec19237b9514e91a997d2293d1425a7'
    });

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            })
        })
        .catch((e) => {
            res.sendStatus(400);
            console.error(e);
        })

})
