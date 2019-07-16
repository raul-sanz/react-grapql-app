import React from 'react'
import {Query} from 'react-apollo'
import FindAuthor from '../../graphql/queries/FindAuthor';

const ViewAuthor = ({match}) => {
  return (
    <Query query={FindAuthor}  variables={{id: match.params.id}}>
      {
        ({data,loading, error})=>{
          if(loading)return (
            <div className="container mt-7">
              <h2>Cargando datos del autor...</h2>
            </div>
          )
          return(
            <div className="container mt-5">
              <div className="col-6">

                  <p>Datos de author: <span>{data.author.name}</span></p>
                  <table className="table mt-5">
                    <thead>
                      <tr>
                        <th scope="col">Frases</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.author.quotes.map((quote, index)=>(
                      <tr key={index}>
                        <td>{quote.text}</td>
                        
                      </tr>
                    ))}
                    </tbody>
                  </table>
              </div>
            </div>
          )
        }
      }
    </Query>
  );
};

export default ViewAuthor;