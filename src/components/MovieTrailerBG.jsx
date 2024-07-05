import {useSelector} from 'react-redux'
import MovieTitle from './UI/MovieTitle'
import Trailer from './UI/Trailer'
import Cover from './UI/Cover'
import MovieModel from './UI/MovieModel'
const MovieTrailerBG = ({open, close, isModelActive}) => {
  const nowPlayingMovies = useSelector(
    (store) => store.movieSlice?.nowPlayingMovies
  )
  if (!nowPlayingMovies) {
    return <h1>Loading.....</h1> //todo shimmer
  }
  const mainMovie = nowPlayingMovies[6] ?? nowPlayingMovies[0]
  const {id, title, overview} = mainMovie
  return (
    <section className="relative">
      <Cover />
      <MovieTitle
        open={open}
        movieID={id}
        movieTitle={title}
        movieOverview={overview}
      />
      <Trailer movieID={id} />
      {/* model for home page tailor */}
      {isModelActive && <MovieModel type={'movie'} id={id} close={close} />}
    </section>
  )
}
export default MovieTrailerBG
