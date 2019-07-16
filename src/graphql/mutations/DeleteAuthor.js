import {gql} from 'apollo-boost'

const DeleteAuthor = gql`mutation ( $id: ID!){
  deleteAuthor(
    where:{id:$id}
  ){
    id
  }
}`

export default DeleteAuthor;