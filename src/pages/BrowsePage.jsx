import useModel from '../Hooks/useModel'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'
import MovieModel from '../components/UI/MovieModel'

const BrowsePage = () => {
  const [openModel, closeModel, isModelActive] = useModel()
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

  return (
    <>
      <MovieTrailerBG close={() => closeModel()} open={() => openModel()} />
      <MoviesListContainer />
      {isModelActive && <MovieModel close={() => closeModel()} />}
    </>
  )
}
export default BrowsePage
