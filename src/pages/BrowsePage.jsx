import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const BrowsePage = () => {
  useNowPlayingMovies()

  return (
    <main className=" bg-[#141414] text-white pb-[40px]">
      <MovieTrailerBG />
      <MoviesListContainer />
    </main>
  )
}
export default BrowsePage
