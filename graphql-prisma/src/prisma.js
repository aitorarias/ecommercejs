import {
    Prisma
} from "prisma-binding";

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

//prisma.query prisma.mutation prisma.subscription prisma.exits



// prisma.query.users(null, '{id name posts {id title} }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.query.posts(null, '{id title body published}').then((data) =>{
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.query.comments(null, '{ id text author {id name} }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.createPost({
//     data: {
//         title: "Esto es un nuevo post hecho desde prisma-binding",
//         body: "Prisma binding es lo mejor del mundo",
//         published: true,
//         author: {
//             connect: {
//                 id: "cjrqc184j000p07682ftn1x41"
//             }
//         }
//     }
// }, '{id title body published}').then((data) => {
//     console.log(data)
//     return prisma.query.users(null, '{id name posts {id title body} }')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// updatePost y cambiar el body y el published al valor contrario marcado
// Fetch todos los posts (id, title, body, published) e imprimirlo por consola
// Ver todos los posts y comprobar que todo funciona OK

prisma.mutation.updatePost({
    where: {
        id: "cjrrpsjhx02iq0768o6nxr57f"
    },
    data: {
        body: "Modificación del body desde prisma-binding",
        published: true
    }
}, '{id}').then((data) => {
    return prisma.query.posts(null, '{id title body published}').then((data) => {
        console.log(JSON.stringify(data, undefined, 2))
    })
})