import SpotifyWebApi from 'spotify-web-api-node'

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
})

console.log(spotifyApi.getAccessToken())
