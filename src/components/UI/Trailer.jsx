import {useSelector} from 'react-redux'
import useMovieTrailer from '../../Hooks/useMovieTrailer'
import {useState} from 'react'

const Trailer = ({movieID}) => {
  const movieTrailerData = useSelector((store) => store.movieSlice.trailer)
  useMovieTrailer(movieID)

  if (!movieTrailerData) return null

  const filterData = movieTrailerData.filter((data) => data.type === 'Trailer')
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
