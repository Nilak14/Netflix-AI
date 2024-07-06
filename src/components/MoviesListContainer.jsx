import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const MoviesListContainer = ({type}) => {
  const movies = useSelector((store) => store.movieSlice)
  if (!movies) return
  return (
    <section className="bg-[#141414]">
      <div className="-mt-[60px] pl-8 lg:-mt-[300px] lg:pl-20 relative  z-10 bg-transparent ">
        <MovieList
          type={type}
          title={'now playing'}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          type={type}
          title={'top rated'}
          movies={movies.topRatedMovies}
        />
        <MovieList
          type={type}
          title={'popular now'}
          movies={movies.popularMovies}
        />
        <MovieList
          type={type}
          title={'up coming'}
          movies={movies.upComingMovies}
        />
      </div>
    </section>
  )
}
export default MoviesListContainer
