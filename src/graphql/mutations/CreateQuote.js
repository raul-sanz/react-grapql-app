import {gql} from 'apollo-boost';


const CreateQuote = gql`mutation (
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

export default  CreateQuote

//{"connect": {"id": "cjy4tp1ylb7ci0b5337gnxnnl" } }