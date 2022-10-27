import React from "react"
import { useParams , useState } from "react-router-dom"

export const DetailsPokemon = () =>{
    const { name } = useParams()
    const [pokemons , setPokemons] = React.useState({})
        React.useEffect (() =>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(data => setPokemons(data))
        } , [])


    return (
        <>
       <img src={pokemons.sprites?.front_default}/>
       <p>id :  {pokemons.id}</p>  
       <p>name : {pokemons.name} </p> 
       <p>taille : {pokemons.height / 10} m </p>
       <p>poids : {pokemons.weight / 10} kg</p> 
       <p>types {pokemons.types?.[0].type.name} </p>
        </>
    )
}