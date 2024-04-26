import './App.css'
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {

  return (
    <>
      <PokemonCard  />
      {/* <div className="box-content bg-white h-96 w-80 justify-evenly rounded-2xl shadow-lg shadow-black relative">
        <div className="flex flex-col items-center relative z-10 top-0">
            <div className='absolute bg-pokemon-bg-pattern w-full h-32 rounded-t-2xl  -z-10 top-0'></div>
          <div className="bg-white w-48 h-48 rounded-full overflow-hidden">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg" className="w-full h-full"/>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-lg py-2'>Blastoise <span className='text-gray-500 font-light'>105hp</span></p>
            <p className='text-gray-500 font-light pb-2'>172 exp</p>
          </div>
        </div>
        <div className= 'border-solid border-zinc-300 border-t-2 flex flex-col justify-between z-10'>
          <div className="h-20 flex justify-around items-center">
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>95K</span>Ataque</p>
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>40K</span>Ataque Especial</p>
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>80K</span>Defensa</p>
          </div>
          <button className="self-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Generar nuevo Pokemon</button>
        </div>
      </div> */}


      
    </>
  )
}

export default App
