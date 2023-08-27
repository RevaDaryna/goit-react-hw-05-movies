import React, { Suspense, lazy } from 'react'
const SearchMovies = lazy(() => import ('../components/SearchMovies/SearchMovies') );

const Movies = (handleSearchSubmit) => {
  return (
    <Suspense fallback ={<h2>Loading...</h2>}>
      <SearchMovies onSubmit={handleSearchSubmit}/>
    </Suspense>
  )
}

export default Movies
