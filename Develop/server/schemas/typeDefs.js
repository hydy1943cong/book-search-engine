
const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]  
  }

  type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(id: ID, username: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String, email: String, password: String!): Auth
    saveBook(bookId: ID!, title: String!, authors: [String], description: String!, image: String, link: String): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;