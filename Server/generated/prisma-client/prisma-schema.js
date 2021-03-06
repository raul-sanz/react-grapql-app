module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAuthor {
  count: Int!
}

type AggregateQuote {
  count: Int!
}

type Author {
  id: ID!
  name: String!
  quotes(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quote!]
}

type AuthorConnection {
  pageInfo: PageInfo!
  edges: [AuthorEdge]!
  aggregate: AggregateAuthor!
}

input AuthorCreateInput {
  id: ID
  name: String!
  quotes: QuoteCreateManyWithoutAuthorInput
}

input AuthorCreateOneWithoutQuotesInput {
  create: AuthorCreateWithoutQuotesInput
  connect: AuthorWhereUniqueInput
}

input AuthorCreateWithoutQuotesInput {
  id: ID
  name: String!
}

type AuthorEdge {
  node: Author!
  cursor: String!
}

enum AuthorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type AuthorPreviousValues {
  id: ID!
  name: String!
}

type AuthorSubscriptionPayload {
  mutation: MutationType!
  node: Author
  updatedFields: [String!]
  previousValues: AuthorPreviousValues
}

input AuthorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthorWhereInput
  AND: [AuthorSubscriptionWhereInput!]
  OR: [AuthorSubscriptionWhereInput!]
  NOT: [AuthorSubscriptionWhereInput!]
}

input AuthorUpdateInput {
  name: String
  quotes: QuoteUpdateManyWithoutAuthorInput
}

input AuthorUpdateManyMutationInput {
  name: String
}

input AuthorUpdateOneRequiredWithoutQuotesInput {
  create: AuthorCreateWithoutQuotesInput
  update: AuthorUpdateWithoutQuotesDataInput
  upsert: AuthorUpsertWithoutQuotesInput
  connect: AuthorWhereUniqueInput
}

input AuthorUpdateWithoutQuotesDataInput {
  name: String
}

input AuthorUpsertWithoutQuotesInput {
  update: AuthorUpdateWithoutQuotesDataInput!
  create: AuthorCreateWithoutQuotesInput!
}

input AuthorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quotes_every: QuoteWhereInput
  quotes_some: QuoteWhereInput
  quotes_none: QuoteWhereInput
  AND: [AuthorWhereInput!]
  OR: [AuthorWhereInput!]
  NOT: [AuthorWhereInput!]
}

input AuthorWhereUniqueInput {
  id: ID
  name: String
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAuthor(data: AuthorCreateInput!): Author!
  updateAuthor(data: AuthorUpdateInput!, where: AuthorWhereUniqueInput!): Author
  updateManyAuthors(data: AuthorUpdateManyMutationInput!, where: AuthorWhereInput): BatchPayload!
  upsertAuthor(where: AuthorWhereUniqueInput!, create: AuthorCreateInput!, update: AuthorUpdateInput!): Author!
  deleteAuthor(where: AuthorWhereUniqueInput!): Author
  deleteManyAuthors(where: AuthorWhereInput): BatchPayload!
  createQuote(data: QuoteCreateInput!): Quote!
  updateQuote(data: QuoteUpdateInput!, where: QuoteWhereUniqueInput!): Quote
  updateManyQuotes(data: QuoteUpdateManyMutationInput!, where: QuoteWhereInput): BatchPayload!
  upsertQuote(where: QuoteWhereUniqueInput!, create: QuoteCreateInput!, update: QuoteUpdateInput!): Quote!
  deleteQuote(where: QuoteWhereUniqueInput!): Quote
  deleteManyQuotes(where: QuoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  author(where: AuthorWhereUniqueInput!): Author
  authors(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Author]!
  authorsConnection(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthorConnection!
  quote(where: QuoteWhereUniqueInput!): Quote
  quotes(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quote]!
  quotesConnection(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuoteConnection!
  node(id: ID!): Node
}

type Quote {
  id: ID!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  author: Author!
}

type QuoteConnection {
  pageInfo: PageInfo!
  edges: [QuoteEdge]!
  aggregate: AggregateQuote!
}

input QuoteCreateInput {
  id: ID
  text: String!
  author: AuthorCreateOneWithoutQuotesInput!
}

input QuoteCreateManyWithoutAuthorInput {
  create: [QuoteCreateWithoutAuthorInput!]
  connect: [QuoteWhereUniqueInput!]
}

input QuoteCreateWithoutAuthorInput {
  id: ID
  text: String!
}

type QuoteEdge {
  node: Quote!
  cursor: String!
}

enum QuoteOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type QuotePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input QuoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [QuoteScalarWhereInput!]
  OR: [QuoteScalarWhereInput!]
  NOT: [QuoteScalarWhereInput!]
}

type QuoteSubscriptionPayload {
  mutation: MutationType!
  node: Quote
  updatedFields: [String!]
  previousValues: QuotePreviousValues
}

input QuoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuoteWhereInput
  AND: [QuoteSubscriptionWhereInput!]
  OR: [QuoteSubscriptionWhereInput!]
  NOT: [QuoteSubscriptionWhereInput!]
}

input QuoteUpdateInput {
  text: String
  author: AuthorUpdateOneRequiredWithoutQuotesInput
}

input QuoteUpdateManyDataInput {
  text: String
}

input QuoteUpdateManyMutationInput {
  text: String
}

input QuoteUpdateManyWithoutAuthorInput {
  create: [QuoteCreateWithoutAuthorInput!]
  delete: [QuoteWhereUniqueInput!]
  connect: [QuoteWhereUniqueInput!]
  set: [QuoteWhereUniqueInput!]
  disconnect: [QuoteWhereUniqueInput!]
  update: [QuoteUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [QuoteUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [QuoteScalarWhereInput!]
  updateMany: [QuoteUpdateManyWithWhereNestedInput!]
}

input QuoteUpdateManyWithWhereNestedInput {
  where: QuoteScalarWhereInput!
  data: QuoteUpdateManyDataInput!
}

input QuoteUpdateWithoutAuthorDataInput {
  text: String
}

input QuoteUpdateWithWhereUniqueWithoutAuthorInput {
  where: QuoteWhereUniqueInput!
  data: QuoteUpdateWithoutAuthorDataInput!
}

input QuoteUpsertWithWhereUniqueWithoutAuthorInput {
  where: QuoteWhereUniqueInput!
  update: QuoteUpdateWithoutAuthorDataInput!
  create: QuoteCreateWithoutAuthorInput!
}

input QuoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  author: AuthorWhereInput
  AND: [QuoteWhereInput!]
  OR: [QuoteWhereInput!]
  NOT: [QuoteWhereInput!]
}

input QuoteWhereUniqueInput {
  id: ID
}

type Subscription {
  author(where: AuthorSubscriptionWhereInput): AuthorSubscriptionPayload
  quote(where: QuoteSubscriptionWhereInput): QuoteSubscriptionPayload
}
`
      }
    