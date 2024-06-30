import {useSelector} from 'react-redux'

import BGImage from './UI/BGImage'
import MovieTitle from './UI/MovieTitle'
import {LuInfo} from 'react-icons/lu'
import {FaPlay} from 'react-icons/fa'

const PosterSection = ({type}) => {
  const movieData = useSelector(
    (store) => store.infiniteMovieSlice.movieList
  )[0]

  if (!movieData) return //todo useShimmer for image

  return (
    <section>
      <MovieTitle
        movieID={movieData.id}
        movieTitle={movieData.title}
        movieOverview={movieData.overview}
      />
      <BGImage id={movieData.id} type={type} />
    </section>
  )
}
export default PosterSection
