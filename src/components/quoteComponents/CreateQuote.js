import React from 'react'
import createQuote from '../../graphql/mutations/CreateQuote'
import {Mutation,Query} from 'react-apollo'

import getAllAuthors from '../../graphql/queries/GetAllAuthors'

const UpdateQuote = ({history}) => {
  let author_id, text;
  return (
    <Query query={getAllAuthors} >
      {
        ({data,loading,error})=>{
          if(loading)return 'Loadins...'
          if(error)return `${error.message}`
          return(
            <Mutation mutation={createQuote} onCompleted={() => history.push('/')}>
              {
                (createQuoteNow,{loading,error})=>{
                  if(loading)return 'Creando Frase...'
                  if(error)return `${error.message}`

                  return(
                    <div className="container mt-7">
                      <div className="row">
                        <div className="col-6">
                          <form onSubmit={e => {
                            e.preventDefault()
                            createQuoteNow({variables:{text:text.value,author_id:{"connect": {"id": `${author_id.value}` }}}})
                            }}>
                            <div className="form-group mt-5">
                              <label >Nombre de el autor
                                <input type="text" className="form-control"  placeholder="Ingresa el titulo" ref={node => {text = node;}}/>
                              </label>
                            </div>
                            <div className="form-group mt-5">
                                <p>Seleciona el autor</p>
                                <select ref={node => {author_id = node}}>
                                  {data.authors.map((author,index)=>(
                                    <option key={index} value={author.id} >{author.name}</option>
                                  ))}
                                </select>
                              
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
          )
        }
      }
    </Query>

  );
};

export default UpdateQuote;