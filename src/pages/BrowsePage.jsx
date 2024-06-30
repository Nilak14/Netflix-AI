import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import useOnTheAirSeries from '../Hooks/useOnTheAirSeries'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const BrowsePage = () => {
  useNowPlayingMovies(1)
  usePopularMovies()
  useTopRatedMovies()

  return (
    <main className=" bg-[#141414] text-white pb-[40px]">
      <MovieTrailerBG />
      <MoviesListContainer />
    </main>
  )
}
export default BrowsePage
