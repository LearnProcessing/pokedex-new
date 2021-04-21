import { React, useContext } from 'react'
import TypeContext from '../context/TypeContext'
import waitPokeballResult from '../helpers/PokeballModal'
import VerticalDetail from '../components/VerticalDetail'
import HorizontalDetail from '../components/HorizontalDetail'
import { myPokemonObj } from '../graphql/vars'
import { useReactiveVar } from '@apollo/client'

 /**
    PurgeCSS:
    bg-yellow-500
    bg-yellow-300
    border-yellow-500
    border-yellow-300

    bg-blue-400
    bg-blue-200
    border-blue-500
    border-blue-200

    bg-green-400
    bg-green-200
    border-green-400
    border-green-200

    bg-yellow-300
    bg-yellow-100
    border-yellow-300
    border-yellow-100

    bg-pink-500
    bg-pink-300
    border-pink-500
    border-pink-300


    bg-green-200
    bg-green-50
    border-green-200
    border-green-50

    bg-purple-700
    bg-purple-500
    border-purple-700
    border-purple-500


    bg-yellow-800
    bg-yellow-600
    border-yellow-800
    border-yellow-600

    bg-red-300
    bg-red-100
    border-red-300
    border-red-100

    bg-yellow-200
    bg-yellow-50
    border-yellow-200
    border-yellow-50

    bg-red-600
    bg-red-300
    border-red-600
    border-red-300

    bg-purple-300
    bg-purple-100
    border-purple-300
    border-purple-100

    bg-indigo-600
    bg-indigo-400
    border-indigo-600
    border-indigo-400

    bg-yellow-200
    bg-yellow-100
    border-yellow-200
    border-yellow-100

    bg-gray-500
    bg-gray-300
    border-gray-500
    border-gray-300

    bg-green-600
    bg-green-400
    border-green-600
    border-green-400

    bg-indigo-700
    bg-indigo-400
    border-indigo-700
    border-indigo-400

    bg-gray-400
    bg-gray-200
    border-gray-400
    border-gray-200

    bg-indigo-300
    bg-indigo-100
    border-indigo-300
    border-indigo-100
    
    bg-gray-900
    bg-gray-400
    border-gray-900
    border-gray-400

   *

   */

export default function PokemonCatch(props){
    const { pokemon } = props
    const unknown = {
        outer: 'bg-red-300',
        inner: 'bg-red-100',
        border: 'border-red-300',
        borderThin: 'border-red-100'
    }
    const type = useContext(TypeContext) || unknown

    let pokemonNickname
    myPokemonObj(JSON.parse(localStorage.getItem('mypokemons')))
    
    let pokemonObj = useReactiveVar(myPokemonObj)
    if(!pokemonObj) pokemonObj = {}
    let totalOwned = pokemonObj[pokemon.name]? pokemonObj[pokemon.name].totalOwned : 0

    async function catchPokemon(e, pokemon){
        e.preventDefault()
        try{
            let mypokemons = JSON.parse(localStorage.getItem('mypokemons'))
            if(!mypokemons) mypokemons = {totalPokemon: 0}
            pokemonNickname = await waitPokeballResult(pokemon.name)

            if(mypokemons[pokemon.name]) {
                mypokemons[pokemon.name].totalOwned ++
                mypokemons[pokemon.name].nicknames.push({pokemonNickname, date: new Date()})
                mypokemons.totalPokemon ++
            } else {
                mypokemons[pokemon.name] = {
                    image: pokemon.sprites.front_default,
                    nicknames: [{pokemonNickname, date: new Date()}],
                    totalOwned: 1
                }
                mypokemons.totalPokemon ++
            }
            localStorage.setItem('mypokemons', JSON.stringify(mypokemons))
            myPokemonObj(mypokemons)
            console.log('pokemon captured')
        } catch (fail){
            console.log('pokemon escaped')
        }
    }
    

    return(
        <> 
            <div className="relative flex flex-row justify-center font-press-start pt-0 sm:pt-32 2xl:pb-120 2xl:pt-60 md:pb-48 sm:pb-30 sm:rounded-lg opacity-100">
                <div className={`grid grid-flow-row grid-row-2 ${type.outer} z-0 w-68 sm:w-60 h-full border ${type.outer} sm:rounded-lg items-center`}>
                    <div className={`${type.outer} p-3 rounded-lg`}>
                        <h3 className={`text-center ${type.borderThin} rounded-lg p-2 border-4 ${type.inner}`}>{pokemon.name}</h3>
                    </div>
                    <div className={`${type.outer} p-3 pt-0`}>
                        <div className={`border-4 ${type.inner} ${type.borderThin} rounded-lg`}>
                            <div className="flex flex-row justify-center">
                                <img className="w-60 h-56 sm:h-52 z-50" src={pokemon.sprites.front_default} alt="pokemon"/>
                            </div>
                            <div className="flex flex-row justify-around ml-0 sm:ml-8" style={{fontSize:"10px"}}>
                                <p>height: {pokemon.height}</p>
                                <p>weight: {pokemon.weight}</p>
                            </div>
                        </div>
                        <p className="text-center text-xs pt-2">owned: {totalOwned}</p>
                    </div>

                    <div className={`${type.outer} flex flex-row justify-around p-3 pt-0 rounded-lg`}>
                        <button onClick={e => {catchPokemon(e, pokemon)}} className="p-2 text-xs bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-lg ">catch</button>
                    </div>
                    <VerticalDetail pokemon={pokemon} type={type}/>
                </div>
                    <HorizontalDetail pokemon={pokemon} type={type}/>
            </div>
        </>
    )

}