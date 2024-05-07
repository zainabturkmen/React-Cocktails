import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef("")
  return (
  <section className='section search'>
    <form className='search-from'>
      <div className='form-control'>
        <label htmlFor='name'>search</label>
      </div>
    </form>
  </section>
  )
}

export default SearchForm
