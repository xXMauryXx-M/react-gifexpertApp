import React from 'react';

export const GifGriditem = ({title,url}) => {
  return (
  
  <div className='animate__fadeIn  ' >
      <img  src={url}></img>
      <p>{title}</p>

  </div>

  )
};


export default GifGriditem