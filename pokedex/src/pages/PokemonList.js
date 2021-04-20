import { React } from 'react'
import { GET_POKEMONS } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'
import { setOffset } from '../actions'
import Lottie from 'react-lottie'
import Pikachu from '../lotties/pikachu'
import PokemonCard from '../components/PokemonCard'

export default function PokemonList (){ 
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
    const limit = 12
    const dispatch = useDispatch()
    const offset = useSelector(state => state.pokemons.offset)
    let currentPage = Math.floor(offset / limit) + 1
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {limit, offset}
      });

    function nextPage(e, count){
        e.preventDefault()
        dispatch(setOffset(offset + limit > count ? offset : offset + limit))
    }

    function previousPage(e){
        e.preventDefault()
        dispatch(setOffset(offset - limit < 0 ? 0 : offset - limit))
    }
    
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
    const count = data.pokemons.count

    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row justify-center ml-3 w-84 flex-wrap pt-6 max-w-5xl 2xl:pb-96 2xl:pt-12">
                {data.pokemons.results.map(pokemon => {
                    return (
                        <PokemonCard className="" key={pokemon.id} pokemon={pokemon} totalOwned={storagePokemons[pokemon.name]? storagePokemons[pokemon.name].totalOwned : 0}/>
                    )
                })}
                <div className="fixed left-0 top-1/2 ml-1 font-press-start">
                    <button className="bg-gray-300 rounded-lg px-1 disabled:opacity-10" onClick={e => previousPage(e)} disabled={currentPage === 1}>&laquo;{currentPage > 1? currentPage - 1 : " "}<span className="hidden sm:inline-block"style={{fontSize:"10px"}}>/{Math.floor(count / limit)}</span></button>
                </div>
                <div className="fixed right-0 top-1/2 mr-1 font-press-start">
                    <button className="bg-gray-300 rounded-lg px-1 disabled:opacity-10" onClick={e => nextPage(e)} disabled={currentPage === Math.floor(count / limit)}>{currentPage + 1}<span className="hidden sm:inline-block"style={{fontSize:"10px"}}>/{Math.floor(count / limit)}</span>&raquo;</button>
                </div>
            </div>
        </div>

    )
       
}