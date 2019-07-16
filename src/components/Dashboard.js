// @flow 
import * as React from 'react';
import { Query, Mutation } from 'react-apollo';
import GetAllData from '../graphql/queries/GetAllData'
import DeleteAuthor from '../graphql/mutations/DeleteAuthor'
import DeleteQuote from '../graphql/mutations/DeleteQuote'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Query query={GetAllData} pollInterval={300}>
      {
        ({loading, error, data})=>{
          if(loading) return 'Loading...'
          if(error) return `${error.message}`
          return(
            <div className="container mt-5" >
              <div className="row">
                <Mutation mutation={DeleteAuthor}>
                  {
                    (deleteAuthorNow,{loading})=>{
                      return(
                        <div className=" col-md-4">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                            {data.authors.map((author, index)=>(
                              <tr key={index}>
                                <td>{author.name}</td>
                                <td><Link to={`/authorupdate/${author.id}`} type="button" className="btn btn-primary" >Actualizar</Link></td>
                                <td><Link to={`/viewauthor/${author.id}`} type="button" className="btn btn-info" >Ver</Link></td>
                                
                                <td><button type="button" className="btn btn-danger" onClick={()=> deleteAuthorNow({variables:{id:author.id}})}>Eliminar</button></td>
                              </tr>
                            ))}
                            </tbody>
                          </table>
                          <Link to={'/authorcreate'} className="btn btn-success btn-block">Crear Autor</Link>
                        </div>
                      )
                    }
                  }
                </Mutation>
                
                <Mutation mutation={DeleteQuote}>
                  {
                    (deleteQuoteNow,{loading})=>{
                      return(
                        <div className="col-md-7 offset-md-1">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Author</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                            {data.quotes.map((quote, index)=>(
                              <tr key={index}>
                                <td>{quote.text}</td>
                                <td>{quote.author.name}</td>
                                <td><Link to={`/quoteupdate/${quote.id}`} type="button" className="btn btn-primary" >Actualizar</Link></td>
                                
                                <td><button type="button" className="btn btn-danger" onClick={()=> deleteQuoteNow({variables:{id:quote.id}})}>Eliminar</button></td>
                              </tr>
                            ))}
                            </tbody>
                          </table>
                          <Link to={'/quotecreate'} className="btn btn-info btn-block">Crear Frase</Link>
                        </div>
                      )
                    }
                  }
                </Mutation>
              </div>
            </div>
                      
          )
        }
      }
    </Query>
  );
};

export default Dashboard;