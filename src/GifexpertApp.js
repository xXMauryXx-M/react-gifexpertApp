import { useState } from "react"
import React from 'react'
import { AddCategory } from "./componets/AddCategory"
import GifGrid from "./componets/GifGrid"


export const GifexpertApp = () => {
   const [categorias,setCategorias] = useState(["bad buuny"])
    return (
        <>
            <h2>GifExpertApp</h2>
              <AddCategory  setCategorias={setCategorias} /> {/*aca le estamamos agregnado una nueva gateogira desde el input a categorias*/ }
             <ol>
                 {
                     categorias.map((category)=>( /*se pone parentesis por que no lo pensa coin llaves */
                        <GifGrid
                        key={category}
                        category={category} />
                     ))
                 }
             </ol>  
        </>
    )
}
export default GifexpertApp; 
