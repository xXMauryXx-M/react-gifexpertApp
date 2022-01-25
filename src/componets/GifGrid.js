import React, {  } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGriditem from './GifGriditem';

export const GifGrid = ({category}) => {


/*: para renonmbrar*/ 
  const{ data:images, loading}= useFetchGifs(category)

//     useEffect(()=>{/*como es una promesa puede haber un then*/ 
//         getGifs(category).then(imgs=>setimages(imgs))/*laanza la peticion para buscar los gift y los coloca en el dom en las imegesn []*/ 
//     },[category]) // useefect significa que  solo quero que se ejecute cuando el componenten sea renderizacdo la primera vez en pcoas apalbar asolo una vez
    
    /*si el useeffect cambia debemos indicarle donde quiere los cambios*/
/*useEffect y sus llaves [] indica, sobre quién dependerá la ejecución. En otras palabras, cuando cambie quién deberá volver a ejecutarse el segmento*/ 
  
  return (
      <> 
    <h3>{category}</h3>

{
  loading ? <p>Loading</p>:null
}


  <div className='card-grid' >


    {
      images.map(img=>(
            
/*muetra las imagenes*/
           <GifGriditem key={img.id} {...img} />
            // <li key={img.id} >  {img.title}</li>
        ))
    }

  </div>
  </>
  )

};

export default GifGrid
