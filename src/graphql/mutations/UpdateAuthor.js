import {gql} from 'apollo-boost';


const UpdateAuthor = gql`mutation (
  $id: ID!
  $name: String!
){
  updateAuthor(
    where:{id: $id}
    data: {
        name: $name
      }
  ){
    id
  }
}`

export default  UpdateAuthor;