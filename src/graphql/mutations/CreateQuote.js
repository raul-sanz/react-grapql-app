import {gql} from 'apollo-boost';


const createQuote = gql`mutation (
    $text: String!
    $author_id: AuthorCreateOneWithoutQuotesInput!
){
  createQuote(
    data: {
        text: $text
        author: $author_id
      }
  ){
    id
  }
}`

export default  createQuote

//{"connect": {"id": "cjy4tp1ylb7ci0b5337gnxnnl" } }