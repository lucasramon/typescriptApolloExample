import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./prisma/schema"
import resolvers from "./resolvers"

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));