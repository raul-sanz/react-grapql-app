import {gql} from 'apollo-boost'

const DeleteQuote = gql`mutation ( $id: ID!){
  deleteQuote(
    where:{id:$id}
  ){
    id
  }
}`

export default DeleteQuote;