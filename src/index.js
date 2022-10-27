import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListPokemon } from "./pages/listPokemon";
import { DetailsPokemon } from "./pages/detailsPokemon";
import '../src/styles/style.css'
const root = document.getElementById('root')

const app = createRoot(root);


const App = () =>{
    return (
       <BrowserRouter>
         <Routes>
                <Route path="/" element={<ListPokemon/>}/>
                <Route path="/pokemon/:name" element={<DetailsPokemon/>}/>
         </Routes>
       </BrowserRouter>
    )
}


app.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
