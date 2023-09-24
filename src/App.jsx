import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getPokemons } from './store/slices/pokemon/thunks';


function App() {

  
  const dispatch = useDispatch();
  const {isLoading, page, pokemons} = useSelector(state => state.pokemons);
  

  useEffect(()=>{    
    dispatch(getPokemons());
  
  },[])


  return (
    <>
      <h1>Pokemon App</h1>
      <br/>
      <span>Loading: {isLoading ? 'True':'False'}</span>
      <ul>
        {
          pokemons.map((e, idx)=>(
            <li key={idx}>
              {e.name}
            </li>
          ))
        }
      </ul>
      <button
        disabled={isLoading}
        onClick={()=> dispatch(getPokemons(page + 10))}
      >
        Next
      </button>
    </>
  )
}

export default App
