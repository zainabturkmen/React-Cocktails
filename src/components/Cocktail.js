import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  return (
   <article className='cocktails'>
    <div className='img-container'>
      <img src={image} name={name} />
    </div>
   </article>
  )
}

export default Cocktail
