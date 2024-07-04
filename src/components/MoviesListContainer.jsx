import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movieSlice)
  if (!movies) return
  return (
    <section className="bg-[#141414]">
      <div className="-mt-[60px] pl-8 lg:-mt-[300px] lg:pl-20 relative  z-10 bg-transparent ">
        {' '}
        <MovieList title={'now playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'top rated'} movies={movies.topRatedMovies} />
        <MovieList title={'popular now'} movies={movies.popularMovies} />
        <MovieList title={'up coming'} movies={movies.upComingMovies} />
      </div>
    </section>
  )
}
export default MoviesListContainer
