import {gql} from 'apollo-boost'

const FindAuthor= gql`query ( $id: ID!){
  author(
    where:{id:$id}
  ){
    id
    name
  }
}`

export default FindAuthor