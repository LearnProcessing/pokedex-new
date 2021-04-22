export default function HorizontalDetail(props){
    const { type, pokemon } = props

    return(
        <>
            <div className="mx-2 hidden sm:inline-block">
                <div className={`py-2 font-press-start ${type.outer} rounded-lg w-102 lg:w-114 xl:w-120`} style={{height:"25rem"}}>
                    <div className="inline pt-1 text-center">
                        <div className={`${type.borderThin} rounded-lg pt-0 pb-1 mb-2 mx-2 border-4 ${type.inner}`}>
                            <p className="text-center text-xs" >types:</p>
                            <ul className="text-left py-1 mx-1 flex flex-row" style={{fontSize:"10px"}}>
                                {pokemon.types.map(type => {
                                    return <li className="mr-2" key={type.type.name}>{type.type.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="pt-0 inline text-center">
                        <div className={`${type.borderThin} rounded-lg pt-0 pb-1 mb-2 mx-2 border-4 ${type.inner}`}>
                            <p className="text-center text-xs" >abilities:</p>
                            <ul className="text-left py-1 mx-1 flex flex-row" style={{fontSize:"10px"}}>
                                {pokemon.abilities.map(ability => {
                                    return <li className="mr-2" key={ability.ability.name}>{ability.ability.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="pt-0 inline text-center">
                        <div className={`${type.borderThin} rounded-lg pt-0 pb-1 mb-2 mx-2 border-4 ${type.inner} h-64 overflow-scroll`}>
                            <p className="text-center text-xs" >moves:</p>
                            <ul className="text-left pt-1 mx-1 mb-2 flex flex-row flex-wrap" style={{fontSize:"10px"}}>
                                {pokemon.moves.map(move => {
                                    return <li className={`mr-2 py-1 mt-1 px-1 border-2 ${type.border} rounded-md`} key={move.move.name}>{move.move.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}