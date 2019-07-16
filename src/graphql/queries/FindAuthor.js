import {gql} from 'apollo-boost'

const FindAuthor= gql`query ( $id: ID!){
  author(
    where:{id:$id}
  ){
    id
    name
    quotes{
      text
    }
  }
}`

export default FindAuthor