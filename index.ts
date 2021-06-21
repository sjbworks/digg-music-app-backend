import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { spotifyApi } from './spotify'
import { typeDefs } from './graphql'

const app = express()

const resolvers = {
  Query: {
    getGraphData: (a:string) => spotifyApi.searchArtists(a)
      .then((data) => {
        console.log('Search artists by "Love"', data.body);
        return data.body
      }, (err) => {
        console.error(err);
        return err
      })
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)