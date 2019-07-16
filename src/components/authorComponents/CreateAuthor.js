import React from 'react'
import {Mutation} from 'react-apollo'
import createAuthor from '../../graphql/mutations/CreateAuthor'


const CreateAuthor = ({history}) => {
  let name;
  return (
    <Mutation mutation={createAuthor} onCompleted={() => history.push('/')}>
      {
        (addNewAuthor,{loading, error})=>{
          if(loading) return (
            <div className="container mt-7">
              <h2>Creando autor...</h2>
            </div>
          )
          if(error)return `${error.message}`

          return(
            <div className="container mt-7">
              <div className="row">
                <div className="col-6">
                  <form onSubmit={e => {
                    e.preventDefault()
                    addNewAuthor({variables:{name:name.value}})
                    }}>
                    <div className="form-group mt-5">
                      <label >Nombre de el autor
                        <input type="text" className="form-control"  placeholder="Ingresa el titulo" ref={node => {name = node;}}/>
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
};

export default CreateAuthor;