"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// export const startApolloServer = async () => {
exports.typeDefs = apollo_server_express_1.gql `
  scalar Object

  type Node {
    id: String!
    label: String!
  }

  type Edge {
    id: String!
    source: String!
    target: String!
    label: String!
  }

  type GraphData {
    nodes: [Node!]!
    edges: [Edge!]!
  }

  type Query {
    getGraphData(name: String!): Object
  }
  `;
const resolvers = {
    Query: {
        getGraphData: (id) => `Hello world! ${id}`,
    },
};
//   const server = new ApolloServer({ typeDefs, resolvers });
//   await server.start();
//   const app = express();
//   server.applyMiddleware({ app });
//   await new Promise(resolve => app.listen({ port: 4000 }, resolve));
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   return { server, app };
// }
