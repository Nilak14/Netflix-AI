import {useSelector} from 'react-redux'
import useMoviesDetails from '../../Hooks/useMoviesDetails'
import useSeriesDetails from '../../Hooks/useSeriesDetails'
import ModelData from './ModelData'
import ModelImage from './ModelImage'
import {FaPlay} from 'react-icons/fa'
import MovieTitle from './MovieTitle'
import ModelShimmer from '../Shimmer/ModelShimmer'

const ModelContent = ({close, id, type}) => {
  if (type === 'movie') {
    useMoviesDetails(id)
  } else {
    useSeriesDetails(id)
  }
  const data =
    type === 'movie'
      ? useSelector((store) => store.movieSlice.movieDetails)
      : useSelector((store) => store.movieSlice.seriesDetails)

  if (data?.id !== id) {
    return <ModelShimmer close={close} />
  }
  const title = data?.title ?? data?.name
  return (
    <section>
      <div className=" bg-gradient-to-b from-black">
        <div className="relative w-full">
          <ModelImage imagePath={data?.backdrop_path} name={title} />
          <button
            onClick={() => close()}
            className="absolute top-[15px] right-[15px] text-white text-xl font-medium bg-neutral-900 rounded-full flex items-center justify-center w-[40px] h-[40px] hover:scale-110"
          >
            X
          </button>
          <p className="absolute bottom-[35%] left-[30px] text-2xl sm:text-3xl font-bold">
            {title}
          </p>
          <button className="flex absolute bottom-[15%] left-[30px] items-center gap-2 text-sm sm:text-lg bg-white text-black rounded-md px-2 sm:px-4 py-1 sm:py-2 md:px-8 hover:opacity-75 ">
            <FaPlay className="text-xs sm:text-xl" /> <span>Play</span>
          </button>
        </div>
      </div>

      <ModelData type={type} data={data} />
    </section>
  )
}
export default ModelContent
