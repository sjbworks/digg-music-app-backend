import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { spotifyApi } from './spotify'
import { typeDefs } from './graphql'

const app = express()

const resolvers = {
  Query: {
    hello: () => spotifyApi.searchArtists('Love')
      .then(function(data) {
        console.log('Search artists by "Love"', data.body);
      }, function(err) {
        console.error(err);
      })
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)