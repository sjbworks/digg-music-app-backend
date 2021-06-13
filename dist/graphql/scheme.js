"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
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
  getGraphData(id: String!): GraphData!
}
`;
