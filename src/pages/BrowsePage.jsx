import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const Home = () => {
  useNowPlayingMovies(1)
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <>
      <MovieTrailerBG />
      <MoviesListContainer />
    </>
  )
}
export default BrowsePage
