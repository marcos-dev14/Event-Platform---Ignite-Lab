import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4olpt090c9v01xn47yibw15/master',
  cache: new InMemoryCache()
})