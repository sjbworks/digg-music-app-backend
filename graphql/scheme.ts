import { gql } from 'apollo-server-express'

  export const typeDefs = gql`
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
  `
