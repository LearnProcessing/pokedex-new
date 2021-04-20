import { React } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { myPokemonVar } from '../graphql/vars'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function PokemonCard(props){
    
    const { pokemon } = props
    const location = useLocation()
    const history = useHistory()

    function checkDetail(e, pokemonName){
        e.preventDefault()
        console.log(e.target.id, 'check>>>>>>>>')
        if(e.target.id === 'deleteButton'){
            e.stopPropagation()
        } else {
            history.push(`/pokemons/${pokemonName}`)
        }
    }

    function removePokemon(e, pokemon){
        e.preventDefault()
        MySwal.fire({
            title: <p className="font-press-start">are you sure?</p>,
            showConfirmButton: true,
            showCancelButton: true

        }).then(result => {
            if(result.isConfirmed){

                let mypokemons = JSON.parse(localStorage.getItem('mypokemons'))
                let currentNickname = pokemon.pokemonNickname
                let newNicknames = mypokemons[pokemon.name].nicknames.filter(nickname => nickname.pokemonNickname !== currentNickname)
                mypokemons[pokemon.name].nicknames = newNicknames
                mypokemons[pokemon.name].totalOwned --
                mypokemons.totalPokemon -- 
                localStorage.setItem('mypokemons', JSON.stringify(mypokemons))
                myPokemonVar(props.fetchPokemon(mypokemons))
            }
        })
    }
    return(
        <div onClick={e => checkDetail(e, pokemon.name)} className="z-0 bg-gray-300 opacity-90 hover:opacity-100 mb-2 sm:mb-8 mr-6 ml-3 flex flex-col border rounded-lg font-press-start text-center ">
            <div className="w-44 h-52 opacity-100 overflow-auto">
            <div onClick={e => removePokemon(e, pokemon)} id="deleteButton" className={`absolute z-50 ${location.pathname === '/mypokemons' ? '' : 'hidden'}`} style={{marginLeft:'9.3rem'}}>
                <svg id="deleteButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="inline-block bi bi-trash p-1 bg-gray-400 hover:bg-gray-600 opacity-50 rounded-md" viewBox="0 0 16 16">
                    <path id="deleteButton" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path id="deleteButton" fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </div>
                <img className="w-44 h-44" src={pokemon.image} alt="pokemon"/>
                <p className="text-xs">{location.pathname === '/mypokemons'? pokemon.pokemonNickname : `owned: ${props.totalOwned}`}</p>
            </div>
            <div className="w-44 h-10 opacity-100">
                <p>{pokemon.name}</p>
            </div>
        </div>
    )
}