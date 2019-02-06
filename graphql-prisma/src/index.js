import {
  GraphQLServer,
  PubSub
} from "graphql-yoga";
import db from "./db";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription"
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";
import User from "./resolvers/User";

import prisma from "./prisma";

const pubsub = new PubSub();

// Running the server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Post,
    User,
    Comment
  },
  context: {
    db,
    pubsub,
    prisma
  }
});

// On localhost 4000
server.start(() => {
  console.log("localhost:4000 is on fire 🔥 ");
});