import {gql} from 'apollo-bost'

const DeleteAuthor = gql`mutation ( $id: ID!){
  deleteAuthor(
    where:{id:$id}
  ){
    id
  }
}`

export default DeleteAuthor;