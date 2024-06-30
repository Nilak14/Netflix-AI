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
      <article className="text-white ml-4 md:ml-10 mt-4 sm:mt-[10%]  absolute z-10 ">
        <div className="">
          <h1 className="font-bold text-xl sm:text-4xl lg:text-6xl mb-3 ">
            {movieData.title}
          </h1>
          <p className="hidden md:block w-4/12">{movieData.overview}</p>
          <div className="flex gap-2 mt-4">
            <button className="flex items-center gap-2 text-sm sm:text-lg bg-white text-black rounded-md px-2 sm:px-4 py-1 sm:py-2 md:px-8 hover:opacity-75 ">
              <FaPlay className="text-xs sm:text-xl" /> <span>Play</span>
            </button>
            <button className="flex items-center gap-2 rounded-md text-sm sm:text-lg bg-[#35302F] px-2  sm:px-4 py-1 sm:py-3 md:px-8 opacity-80 hover:opacity-100 ">
              <LuInfo /> <span>More Info</span>
            </button>
          </div>
        </div>
      </article>
      <BGImage id={movieData.id} type={type} />
    </section>
  )
}
export default PosterSection
