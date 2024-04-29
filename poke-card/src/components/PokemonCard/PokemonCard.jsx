import { useState, useEffect } from 'react'

function PokemonCard() {

    const [ id, setId ] = useState(
        // Math.floor(Math.random() * (1025 - 1 + 1)) + 1
        Math.floor(Math.random() * (151 - 1 + 1)) + 1
    );

    const [ pokemonData, setPokemon ] = useState()
     
    useEffect(() => {


      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => { return res.json(); })
        .then(res => { setPokemon(res) })
    }, [id])

    function handleClickAleatorio() {
        // let random = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
        let random = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
        console.log(pokemonData)
        setId( random);
    }

    return (
      <>
        <div className="box-content bg-white h-96 w-80 justify-evenly rounded-2xl shadow-lg shadow-black relative z-10 pt-10">
        <div className="flex flex-col items-center  z-10 top-0">
            <div className='absolute bg-pokemon-bg-pattern w-full h-32 rounded-t-2xl  -z-10 top-0'></div>
          <div className="bg-white w-48 h-48 rounded-full overflow-hidden">
            <img src={pokemonData?.sprites.other.dream_world.front_default} className="w-full h-full"/>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-lg py-2'>{pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1)} <span className='text-gray-500 font-light'>{pokemonData?.stats[0].base_stat}hp</span></p>
            <p className='text-gray-500 font-light pb-2'>{pokemonData?.base_experience} exp</p>
          </div>
        </div>
        <div className= 'border-solid border-zinc-300 border-t-2 flex flex-col justify-between z-10'>
          <div className="h-20 flex justify-around items-center">
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>{pokemonData?.stats[1].base_stat}K</span>Ataque</p>
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>{pokemonData?.stats[3].base_stat}K</span>Ataque Especial</p>
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>{pokemonData?.stats[2].base_stat}K</span>Defensa</p>
          </div>
          <button onClick={handleClickAleatorio} className=" flex justify-between items-center w-48 self-center bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700">
          <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
            Generar Pokemon
          </button>
  
        </div>
      </div>
      </>
    )
  }

export default PokemonCard;