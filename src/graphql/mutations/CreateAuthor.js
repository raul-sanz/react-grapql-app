import {gql} from 'apollo-boost';


const CreateAuthor = gql`mutation (
    $name: String!
){
  createAuthor(
    data: {
        name: $name
      }
  ){
    id
  }
}`

export default  CreateAuthor