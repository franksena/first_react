
interface PokemonProps {
	pokemon: {
		imgSrc?: string; // optionnal
		name: string; // required
	};
}
function PokemonCard ({pokemon}:PokemonProps ){
  return(
      <figure>
        { pokemon.imgSrc ?
          (<img src={pokemon.imgSrc} alt={pokemon.name} />) :(<p> ???</p> )
         
        }
          <figcaption>{pokemon.name} </figcaption>
      </figure>
     
  )
  
  }
  
  
 