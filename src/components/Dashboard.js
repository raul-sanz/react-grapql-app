// @flow 
import * as React from 'react';
import { Query, Mutation } from 'react-apollo';
import GetAllData from '../graphql/queries/GetAllData'

const Dashboard = () => {
  return (
    <Query query={GetAllData}>
      {
        ({loading, error, data})=>{
          if(loading) return 'Loading...'
          if(error) return `${error.message}`
          return(
            <div className="container mt-5" >
              <div className="row">
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
                        <td><button type="button" className="btn btn-primary" >Actualizar</button></td>
                        
                        <td><button type="button" className="btn btn-danger" >Eliminar</button></td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                  <button className="btn btn-success btn-block">Crear Autor</button>
                </div>
                

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
                        <td><button type="button" className="btn btn-primary" >Actualizar</button></td>
                        
                        <td><button type="button" className="btn btn-danger" >Eliminar</button></td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                  <button className="btn btn-info btn-block">Crear Frase</button>
                </div>
              </div>
            </div>
          )
        }
      }
    </Query>
  );
};

export default Dashboard;