import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movieSlice)
  const tvSeries = useSelector((store) => store.tvSeriesSlice)
  if (!movies) return
  return (
    <section className="bg-[#141414]">
      <div className="-mt-[300px] pl-20 relative z-10 bg-transparent">
        <MovieList title={'now playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'top rated'} movies={movies.topRatedMovies} />
        <MovieList title={'popular now'} movies={movies.popularMovies} />
<<<<<<< HEAD
        <MovieList title={'up coming'} movies={movies.upComingMovies} />
        {tvSeries && (
          <MovieList
            title={'on the air: tv series'}
            movies={tvSeries.onTheAirSeries}
          />
        )}
=======
>>>>>>> parent of 405b869 (add pages)
      </div>
    </section>
  )
}
export default MoviesListContainer
