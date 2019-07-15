import {gql} from 'apollo-boost'

const FindQuote= gql`query ( $id: ID!){
  quote(
    where:{id:$id}
  ){
    id
    text
    author{
      name
    }
  }
}`

export default FindQuote