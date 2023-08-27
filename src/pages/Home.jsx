import React, { Suspense, lazy } from 'react'
const PopularMovies = lazy(() => import('components/PopularMovies/PopularMovies'));

const Home = () => {
  return (
    <Suspense fallback ={<h2>Loading...</h2>}>
      <PopularMovies/>
    </Suspense>
  )
}

export default Home
