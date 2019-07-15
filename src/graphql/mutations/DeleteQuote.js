import {gql} from 'apollo-bost'

const DeleteQuote = gql`mutation ( $id: ID!){
  deleteQuote(
    where:{id:$id}
  ){
    id
  }
}`

export default DeleteQuote;