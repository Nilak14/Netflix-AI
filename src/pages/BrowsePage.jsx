import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const BrowsePage = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

  return (
    <>
      <MovieTrailerBG />
      <MoviesListContainer />
    </>
  )
}
export default BrowsePage
