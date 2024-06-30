import {useSelector} from 'react-redux'
import useMovieTrailer from '../../Hooks/useMovieTrailer'

const Trailer = ({movieID, type}) => {
  useMovieTrailer(movieID, type)
  const trailerData =
    type === 'movie'
      ? useSelector((store) => store.movieSlice?.trailer)
      : useSelector((store) => store.tvSeriesSlice?.tvSeriesTrailer)

  if (!trailerData) return null //todo use shimmer

  const filterData = trailerData.filter((data) => data.type === 'Trailer')
  console.log(filterData)
  const mainTrailer = filterData[0]

  return (
    <section className="relative  h-0 pb-[56.25%]">
      <div className="absolute top-[-70px] left-0 w-full h-full">
        <iframe
          className="w-full aspect-video brightness-[.54]"
          src={`https://www.youtube.com/embed/${mainTrailer.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${mainTrailer.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  )
}

export default Trailer
