import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import pokeball from '../assets/pokeball.png'
import { useLocation } from 'react-router-dom'
export default function Navbar(){
    const location = useLocation()
    const isMypokemons = location.pathname === '/mypokemons' 

    return (
        <nav className="bg-gray-100">
            <div className="flex flex-row justify-center pt-2 pb-3 ">
                <NavLink to="/pokemons"><img className="mr-2 w-32 md:w-46 xl:w-45 h-12 md:h-14 xl:h-18 inline" src={logo} alt="Pokemon Logo"/></NavLink>
                <div className="ml-2 group pt-1 md:pt-2 relative w-20 h-12 items-center scale-50">
                    
                    <div className="absolute z-0 border border-r-2 border-l-2 border-gray-100 bg-indigo-500 w-20 h-12 rounded-t-lg">
                    </div>
                    <div className={`absolute transition-all duration-500 transform z-10 bg-gray-100 w-20 ${isMypokemons ? 'h-0' : 'h-11'} group-hover:h-0` }>
                    </div>
                    <div className="absolute z-20 ml-4">
                        <NavLink className="ml-auto mr-auto transition-all duration-200" exact to="/mypokemons">
                        <img className="z-30 w-12" src={pokeball} alt="pokeball"></img>
                        </NavLink>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}