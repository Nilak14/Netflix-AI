import {useSelector} from 'react-redux'
import MovieTitle from './UI/MovieTitle'
import Trailer from './UI/Trailer'
import Cover from './UI/Cover'
const MovieTrailerBG = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movieSlice?.nowPlayingMovies
  )
  if (!nowPlayingMovies) {
    return <h1>Loading.....</h1>
  }
  const mainMovie = nowPlayingMovies[6] ?? nowPlayingMovies[0]
  const {id, title, overview} = mainMovie
  return (
    <section className="relative">
      <Cover />
      <MovieTitle movieID={id} movieTitle={title} movieOverview={overview} />
      <Trailer movieID={id} />
    </section>
  )
}
export default MovieTrailerBG
