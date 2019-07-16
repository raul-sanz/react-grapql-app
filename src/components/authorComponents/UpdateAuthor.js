import React from 'react'
import {Mutation,Query} from 'react-apollo'
import updateAuthor from '../../graphql/mutations/UpdateAuthor'
import findAuthor from '../../graphql/queries/FindAuthor'


const UpdateAuthor = ({history, match}) => {
  let name;
  return(
    <Query query={findAuthor} variables={{id: match.params.id}}>
      {
        ({loading, data})=>{
          if(loading) return(
            <div className="container mt-7">
              <h2>Cargando datos de el autor...</h2>
            </div>
          )

          return (
            <Mutation mutation={updateAuthor} onCompleted={() => history.push('/')}>
              {
                (updateAuthorNow,{loading, error})=>{
                  if(loading) return (
                    <div className="container mt-7">
                      <h2>Actualizando autor...</h2>
                    </div>
                  )
                  if(error)return `${error.message}`
        
                  return(
                    <div className="container mt-7">
                      <div className="row">
                        <div className="col-6">
                          <form onSubmit={e => {
                            e.preventDefault()
                            updateAuthorNow({variables:{id: match.params.id,name:name.value}})
                            }}>
                            <div className="form-group mt-5">
                              <label >Nombre de el autor
                                <input type="text" className="form-control"  placeholder="Ingresa el titulo" ref={node => {name = node;}} defaultValue={data.author.name}/>
                              </label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Crear</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )
                }
              }
            </Mutation>
          );
        }
      }
    </Query>
  )
};

export default UpdateAuthor;