import {gql} from 'apollo-boost';


const UpdateQuote = gql`mutation (
  $id:ID!
  $text: String!
  $author_id:  AuthorUpdateOneRequiredWithoutQuotesInput!
){
  updateQuote(
    where:{id: $id}
    data: {
      
      text: $text
      author: $author_id
    }
  ){
    id
  }
}`

export default  UpdateQuote
//{"connect": {"id": "cjy4tp1ylb7ci0b5337gnxnnl" } }