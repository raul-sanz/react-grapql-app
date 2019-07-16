import { gql } from "apollo-boost";

const getAllAuthors = gql`query{
  authors{
    id
    name
  }

}`

export default getAllAuthors;