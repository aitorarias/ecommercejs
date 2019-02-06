import {
    Prisma
} from "prisma-binding";

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

export {
    prisma as
    default
};

//prisma.query prisma.mutation prisma.subscription prisma.exits

// const createPostForUser = async (authorId, data) => {

//     const userExists = await prisma.exists.User({
//         id: authorId
//     })

//     if (!userExists) {
//         throw new Error('User not found')
//     }
//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{author {id name email posts {id title published} } }')
//     return post.author
// }

// createPostForUser("cjrrwi7jn03md0768gr83omda", {
//     title: "Esto es un post con asíncronas",
//     body: "Las asíncronas son mejores a la hora de traer datos anidados, en vez de hacerlo por continuos callbacks. Un async siempre devuelve algo",
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })


// const updatePostForUser = async (postId, data) => {
//     const postExits = await prisma.exists.Post({
//         id: postId
//     })

//     if (!postExits) {
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{author { id name email posts {id title published } } }')

//     return post.author
// }

// updatePostForUser("cjrrwtjad03tm07684zfarwpm", {
//     published: false
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })