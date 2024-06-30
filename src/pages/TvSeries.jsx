import useOnTheAirSeries from '../Hooks/useOnTheAirSeries'
import MovieTrailerBG from '../components/MovieTrailerBG'
import MoviesListContainer from '../components/MoviesListContainer'

const TvSeries = () => {
  useOnTheAirSeries()
  return (
    <>
      <MovieTrailerBG type={'tvseries'} />
      <MoviesListContainer />
    </>
  )
}
export default TvSeries
