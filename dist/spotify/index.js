"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotifyApi = void 0;
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = process.env;
// credentials are optional
exports.spotifyApi = new spotify_web_api_node_1.default({
    clientId: env.CLIENT_ID,
    clientSecret: env.CLIENT_SECRET,
    redirectUri: env.REDIRECT_URI,
});
exports.spotifyApi.clientCredentialsGrant().then(function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    exports.spotifyApi.setAccessToken(data.body['access_token']);
    // spotifyApi.searchArtists('Love')
    //   .then(function(data) {
    //     console.log('Search artists by "Love"', data.body);
    //   }, function(err) {
    //     console.error(err);
    //   })
}, function (err) {
    console.log('Something went wrong when retrieving an access token', err);
});
