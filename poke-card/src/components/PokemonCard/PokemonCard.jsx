import { useState, useEffect } from 'react'

function PokemonCard() {

    const [ id, setId ] = useState(
        Math.floor(Math.random() * (151 - 1 + 1)) + 1
    );

    const [ foto , setFoto] = useState("rutaFoto")

    const [stats , setStats ] = useState([{},{},{},{}])
    const [ exp , setExp ] = useState(null)
    const [ name , setName ] = useState("pokimon")

    const { base_stat : vida } = stats[0]
    const { base_stat : ataque } = stats[1]
    const { base_stat : defensa } = stats[2]
    const { base_stat : ataqueEspecial } = stats[3]
     
    useEffect(() => {


        const respuesta = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            console.log(res);
            if(!res.ok) {
                console.log(res);
                throw new Error();
            }
            else {
                return res.json();
            }
        })
        .then(res => {

            let rutaFoto = res.sprites.other.dream_world.front_default;
            let nombreFormateado = res.name.charAt(0).toUpperCase() + res.name.slice(1);
            console.log(rutaFoto);
            setFoto(rutaFoto);
            console.log(stats)
            setStats(res.stats)
            setName(nombreFormateado)
            setExp(res.base_experience)
            
            console.log(res);

        })
        .catch(
            console.error("ERROR MORTAL")
        )
    }, [id])

    function handleClickAleatorio() {
        let random = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
        setId( random);
    }

    return (
      <>
        <div className="box-content bg-white h-96 w-80 justify-evenly rounded-2xl shadow-lg shadow-black relative z-10 pt-10">
        <div className="flex flex-col items-center  z-10 top-0">
            <div className='absolute bg-pokemon-bg-pattern w-full h-32 rounded-t-2xl  -z-10 top-0'></div>
          <div className="bg-white w-48 h-48 rounded-full overflow-hidden">
            <img src={foto} className="w-full h-full"/>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-lg py-2'>{name}<span className='text-gray-500 font-light'>{vida}</span></p>
            <p className='text-gray-500 font-light pb-2'>{exp} exp</p>
          </div>
        </div>
        <div className= 'border-solid border-zinc-300 border-t-2 flex flex-col justify-between z-10'>
          <div className="h-20 flex justify-around items-center">
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>{ataque}K</span>Ataque</p>
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>{ataqueEspecial}K</span>Ataque Especial</p>
              <p className="flex flex-col items-center font-extralight text-xs"><span className='font-bold'>{defensa}K</span>Defensa</p>
          </div>
          <button onClick={handleClickAleatorio} className="self-center bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700">Generar nuevo Pokemon</button>
        </div>
      </div>
      </>
    )
  }

export default PokemonCard;