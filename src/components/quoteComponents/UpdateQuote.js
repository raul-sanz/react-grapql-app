import React from 'react'
import updateQuote from '../../graphql/mutations/UpdateQuote'
import {Mutation,Query} from 'react-apollo'

import getAllAuthorsWithOneQuote from '../../graphql/queries/GetAllAuthorsWithOneQuote'

const UpdateQuote = ({history,match}) => {
  let author_id, text;
  return(
    <Query query={getAllAuthorsWithOneQuote} variables={{id: match.params.id}}>
      {
        ({loading,data,error})=>{
          if(loading)return 'loading'
          if(error) return `${error.message}`
          return(
            <Mutation mutation={updateQuote} onCompleted={() => history.push('/')} >
              {
                (updateQuoteNow,{loading,error})=>{
                  if(loading)return 'Actualizando datos'
                  if(error)return `${error.message}`
                  return(
                    <div className="container mt-7">
                      <div className="row">
                        <div className="col-6">
                          <form onSubmit={e => {
                            e.preventDefault()
                            updateQuoteNow({variables:{id: match.params.id,text:text.value,author_id:{"connect": {"id": `${author_id.value}` }}}})
                            }}
                            >
                            <div className="form-group mt-5">
                              <label >Nombre de el autor
                                <input type="text" className="form-control"  placeholder="Ingresa el titulo" defaultValue={data.quote.text} ref={node => {text = node;}}/>
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
                            <button type="submit" className="btn btn-primary">Actualizar</button>
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
    
  )
};

export default UpdateQuote;
