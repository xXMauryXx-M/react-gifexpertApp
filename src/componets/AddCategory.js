import React, { useState } from 'react'
import Proptypes from"prop-types"



export const AddCategory = ({setCategorias}) => {
    
    const[inputvalue,setInputvalue]=useState("")

    const handleChange=(e)=>{
 setInputvalue( e.target.value) 
 

 
    }

    const handleSubmit=(e)=>{
    e.preventDefault()
             
    if(inputvalue===""){
        alert("todos los campos son obligatoriso")
         
        return

    }else{
        setInputvalue("")
        setCategorias((cat)=>[inputvalue,cat])
        setInputvalue("")
    }

  
      
       
    }

    return (
        <form onSubmit={handleSubmit} > 
          <input
          type={"text"}
           value={inputvalue} 
           onChange={handleChange}

           ></input>
        </form>
    )
}



AddCategory.prototype={
    setCategorias:Proptypes.func.isRequired
}
/*  */