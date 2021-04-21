export default function VerticalDetail(props){
    const { type, pokemon } = props
    return (
        <>
            <div className={`${type.outer} p-3 inline pt-0 text-center sm:hidden`}>
                <div className={`${type.borderThin} rounded-lg p-2 border-4 ${type.inner}`}>
                    <p className="text-center text-xs" >types:</p>
                    <ul className="text-left pt-1 flex flex-row" style={{fontSize:"10px"}}>
                        {pokemon.types.map(type => {
                            return <li className="mr-2" key={type.type.name}>{type.type.name}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={`${type.outer} p-3 pt-0 inline text-center sm:hidden`}>
                <div className={`${type.borderThin} rounded-lg p-2 border-4 ${type.inner}`}>
                    <p className="text-center text-xs" >abilities:</p>
                    <ul className="text-left pt-1 flex flex-row" style={{fontSize:"10px"}}>
                        {pokemon.abilities.map(ability => {
                            return <li className="mr-2" key={ability.ability.name}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={`${type.outer} p-3 pt-0 inline text-center sm:hidden`}>
                <div className={`${type.borderThin} rounded-lg p-2 border-4 ${type.inner}`}>
                    <p className="text-center text-xs" >moves:</p>
                    <ul className="text-left pt-1 flex flex-row flex-wrap" style={{fontSize:"10px"}}>
                        {pokemon.moves.map(move => {
                            return <li className={`mr-2 pt-1 py-1 mt-1 px-1 border-2 ${type.border} rounded-md`} key={move.move.name}>{move.move.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}