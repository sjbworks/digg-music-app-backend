import SpotifyWebApi from 'spotify-web-api-node'
import dotenv from 'dotenv'

dotenv.config()
const env = process.env

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: env.CLIENT_ID,
  clientSecret: env.CLIENT_SECRET,
  redirectUri: env.REDIRECT_URI,
})

spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    spotifyApi.setAccessToken(data.body['access_token']);
    // spotifyApi.searchArtists('Love')
    //   .then(function(data) {
    //     console.log('Search artists by "Love"', data.body);
    //   }, function(err) {
    //     console.error(err);
    //   })
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
)


