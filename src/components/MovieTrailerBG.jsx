import {useSelector} from 'react-redux'
import MovieTitle from './UI/MovieTitle'
import Trailer from './UI/Trailer'
import Cover from './UI/Cover'
const MovieTrailerBG = ({type}) => {
  const nowPlaying =
    type === 'movie'
      ? useSelector((store) => store.movieSlice?.nowPlayingMovies)
      : useSelector((store) => store.tvSeriesSlice?.onTheAirSeries)

  if (!nowPlaying) {
    return <h1>Loading.....</h1>
  }
  const mainMovie = nowPlaying[6] ?? nowPlaying[0]
  const {id, title, overview} = mainMovie
  return (
    <section className="relative">
      <Cover />
      <MovieTitle movieID={id} movieTitle={title} movieOverview={overview} />
      <Trailer type={type} movieID={id} />
    </section>
  )
}
export default MovieTrailerBG
