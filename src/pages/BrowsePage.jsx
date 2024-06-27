import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const BrowsePage = () => {
  useNowPlayingMovies()

  return (
    <main className="bg-neutral-950 text-white">
      <MovieTrailerBG />
      <MoviesListContainer />
    </main>
  )
}
export default BrowsePage
