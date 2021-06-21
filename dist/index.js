"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const spotify_1 = require("./spotify");
const graphql_1 = require("./graphql");
const app = express_1.default();
const resolvers = {
    Query: {
        getGraphData: (a) => spotify_1.spotifyApi.searchArtists(a)
            .then((data) => {
            console.log('Search artists by "Love"', data.body);
            return data.body;
        }, (err) => {
            console.error(err);
            return err;
        })
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs: graphql_1.typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
