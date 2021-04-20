import { React } from 'react'
import { GET_DETAIL } from '../graphql/queries'
import { useQuery, useReactiveVar } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Lottie from 'react-lottie'
import Pikachu from '../lotties/pikachu'
import PokemonCatch from '../components/PokemonCatch'
import { TypeProvider, type } from '../context/TypeContext'
import { myPokemonObj } from '../graphql/vars'

export default function PokemonDetail(){
    const { name } = useParams()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Pikachu,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    let storagePokemons = JSON.parse(localStorage.getItem('mypokemons'))
    if(!storagePokemons) storagePokemons = {}
    myPokemonObj(storagePokemons)
    const mypokemons = useReactiveVar(myPokemonObj)

    const { loading, error, data } = useQuery(GET_DETAIL, {
        variables: { name }
    });  
    
    if (loading) return (
        <div className="pt-44 pb-96">
            <Lottie 
                options={defaultOptions}
                height={200}
                width={200}
                />
        </div>
    );
    if (error) return `Error! ${error.message}`; 


    return(
        <>
            <TypeProvider value={type[data.pokemon.types[0].type.name] || type["unknown"]}>
            <PokemonCatch pokemon={data.pokemon} totalOwned={mypokemons[data.pokemon.name]? mypokemons[data.pokemon.name].totalOwned : 0}/>
            </TypeProvider>
        
        </>
    )
}