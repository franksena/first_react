interface PokemonCardProps {
  pokemon :{
    imgSrc?: string;
    name: string;
  }
  
};


function PokemonCard ({pokemon}:PokemonCardProps){
  
return(
    <figure>
      { pokemon.imgSrc ?
        (<img src={pokemon.imgSrc} alt={pokemon.name} />) :(<p> ???</p> )
       
      }
        <figcaption>{pokemon.name} </figcaption>
    </figure>
   
)

}


export default PokemonCard;