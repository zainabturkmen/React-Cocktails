import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  return (
   <article className='cocktails'>
    <div className='img-container'>
      <img src={image} name={name} />
    </div>
    <div className='cocktail-footer'>
      <h3>{name}</h3>
    </div>
   </article>
  )
}

export default Cocktail
