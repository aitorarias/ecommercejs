import ApolloBoost, {
    gql
} from "apollo-boost"

const client = new ApolloBoost({
    uri: 'http://localhost:4000'
})

const getUsers = gql `
    query {
        users {
            id
            name
        }
    }
`

client.query({
    query: getUsers
}).then((response) => {
    console.log(response.data)
})