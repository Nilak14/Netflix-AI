import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movieSlice)
  if (!movies) return
  return (
    <section className="bg-[#141414]">
      <div className="-mt-[300px] pl-20 relative z-10 bg-transparent">
        <MovieList title={'now playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Popular Now'} movies={movies.popularMovies} />
        <MovieList title={'now playing'} movies={movies.nowPlayingMovies} />
      </div>
    </section>
  )
}
export default MoviesListContainer
