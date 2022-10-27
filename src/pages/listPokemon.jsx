import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export const ListPokemon = () =>{

    const [pokemons , setPokemons] = useState([])

    React.useEffect (() =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(err => console.log(err))
    } , [])

    const search = (e) =>{
         const champs = e.target.value
         const element = pokemons.filter((pokemon) =>  pokemon.name.includes(champs));
         setPokemons(element)
    }
    
    return(
        <>
        <input type="search" onChange={(e) => search(e)}/>
        <div className="list">{pokemons.map((p , index )=> {return <Link to={`pokemon/${p.name}`} key={index}>{p.name}</Link>})}</div>
        </>
    )
}