import {useState} from 'react'
import useAllMovies from '../Hooks/useAllMovies'
import InfiniteScrollSection from '../components/InfiniteScrollSection'
import PosterSection from '../components/PosterSection'
import MovieModel from '../components/UI/MovieModel'
import useModel from '../Hooks/useModel'

const MoviesPage = () => {
  const [openModel, closeModel, isModelActive] = useModel()
  useAllMovies()
  return (
    <section className="relative">
      <PosterSection
        close={() => closeModel()}
        open={() => openModel()}
        type={'movie'}
      />
      <InfiniteScrollSection type={'movie'} />
      {isModelActive && <MovieModel close={() => closeModel()} />}
    </section>
  )
}
export default MoviesPage
