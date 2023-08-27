import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
const DetailsMovies = lazy(() => import('components/DetailsMovies/DetailsMovies'));

const Details = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <Suspense fallback ={<h2>Loading...</h2>}>
      <DetailsMovies/>
    </Suspense>
  )
}

export default Details
