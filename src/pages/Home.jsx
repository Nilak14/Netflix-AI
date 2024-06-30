import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import useOnTheAirSeries from '../Hooks/useOnTheAirSeries'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpComingMovies from '../Hooks/useUpComingMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const Home = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  useOnTheAirSeries()

  return (
    <>
      <MovieTrailerBG type={'movie'} />
      <MoviesListContainer />
    </>
  )
}
export default Home
