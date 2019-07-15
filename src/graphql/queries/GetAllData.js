import { gql } from "apollo-boost";

const GetAllData = gql`query {
  authors{
    id
    name
  }
  
  quotes{
    id
    author{
      name
    }
    text
  }

}`

export default GetAllData;