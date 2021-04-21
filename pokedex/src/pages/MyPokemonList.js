import PokemonCard from '../components/PokemonCard'
import { React } from 'react'
import { myPokemonVar } from '../graphql/vars'
import { useReactiveVar } from '@apollo/client'
import Lottie from 'react-lottie'
import Empty from '../lotties/empty'


export default function PokemonList (props){ 
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Empty,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    let storagePokemons = JSON.parse(localStorage.getItem('mypokemons'))

    function fetchStoragePokemon(storagePokemons){
        let pokemons = []
        for(let key in storagePokemons){
            if(key !== 'totalPokemon'){
                storagePokemons[key].nicknames.forEach(pokemon => {  
                    pokemons.push({
                        name: key,
                        image: storagePokemons[key].image,
                        pokemonNickname: pokemon.pokemonNickname,
                        date: pokemon.date
                    })
                })
            }
        }
        return pokemons
    }
    myPokemonVar(fetchStoragePokemon(storagePokemons))
    let mypokemons = useReactiveVar(myPokemonVar)
    
    if(mypokemons.length === 0) {
        return (
            <div className="flex flex-col justify-center pt-24">
                <div className="">
                    <h1 className="font-press-start opacity-70 text-center">You don't have any pokemon. . .</h1>
                </div>
                <div className="pt-20 pb-96">
                    <Lottie 
                        options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
                
            </div>)
    }

    return (
        <div className="2xl:pb-120">
        <div className="pt-4">
            <h1 className="font-press-start opacity-80 text-center">Your Pokemons: {storagePokemons.totalPokemon}</h1>
        </div>
        <div className="h-content 2xl:flex 2xl:flex-row 2xl:justify-center">
            <div className={`sm:ml-16 max-w-8xl flex flex-row justify-center sm:justify-start w-84 flex-wrap pt-6 ${mypokemons.length>2? "": 'pb-96'} sm:${mypokemons.length>3? "": 'pb-96'} lg:${mypokemons.length>4? "": 'pb-96'} xl:${mypokemons.length>6? "": 'pb-96'}`}>
                {mypokemons.map(pokemon => {
                    return <PokemonCard key={pokemon.date} pokemon={pokemon} fetchPokemon={fetchStoragePokemon}/>
                }
                )}
            </div>
        </div>
        </div>
    )
       
}