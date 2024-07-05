import {useSelector} from 'react-redux'

import BGImage from './UI/BGImage'
import MovieTitle from './UI/MovieTitle'
import MovieModel from './UI/MovieModel'

const PosterSection = ({type, close, open, isModelActive}) => {
  const data =
    type === 'movie'
      ? useSelector((store) => store.infiniteMovieSlice.movieList)[0]
      : useSelector((store) => store.infiniteSeriesSlice.seriesList[0])

  if (!data) return //todo useShimmer for image

  return (
    <section>
      <MovieTitle
        close={close}
        open={open}
        movieID={data.id}
        movieTitle={data.title ?? data.name}
        movieOverview={data.overview}
      />
      <BGImage id={data.id} type={type} />
      {isModelActive && <MovieModel type={type} id={data.id} close={close} />}
    </section>
  )
}
export default PosterSection
