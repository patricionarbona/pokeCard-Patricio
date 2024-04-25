import { useState } from 'react'

function PokemonCard() {

    const [ id, setId ] = useState(
        Math.floor(Math.random() * (151 - 1 + 1)) + 1
    );




    function handleClickAleatorio() {
        let random = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
        setId( random);
    }

    return (
      <>
      <h1>soy pokemon {id}</h1>
      <img src= {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id +".svg"} className='m-auto'/>
      <button onClick={handleClickAleatorio} className='button'>{id}</button>
      </>
    )
  }

export default PokemonCard;