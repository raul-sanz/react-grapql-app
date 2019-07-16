import { gql } from "apollo-boost";

const getAllAuthorsWithOneQuote = gql`query($id:ID) {
  authors{
    id
    name
  }

  quote(
    where:{id:$id}
  ){
    id
    text
    author{
      name
    }
  }
}`

export default getAllAuthorsWithOneQuote;