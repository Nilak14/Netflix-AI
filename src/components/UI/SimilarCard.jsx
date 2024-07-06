import {IMG_LINK} from '../../utils/constant'
import {IoPlayCircleOutline} from 'react-icons/io5'

const SimilarCard = ({data}) => {
  if (!data) return <h1>Loading....</h1>
  const {overview, adult, backdrop_path} = data
  const title = data.title || data.name
  const release = data.release_date || data.first_air_date

  return (
    <article className="similar-card mb-4 bg-neutral-800 rounded-md overflow-hidden cursor-pointer ">
      <div className="relative">
        <IoPlayCircleOutline className="play-icon absolute text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 rounded-full" />
        <img
          className="similarImg"
          src={IMG_LINK + backdrop_path}
          alt={title}
        />
      </div>
      <div className="px-6 pb-5">
        <p className="text-lg font-bold tracking-wider py-2">{title}</p>
        <div className="flex justify-between mb-2 text-gray-400 items-center">
          <p className="border-2 py-1 px-2 border-gray-400">
            {adult ? '18+' : 'All'}
          </p>
          <p>{release?.slice(0, 4)}</p>
        </div>
        <p className="line-clamp-5 text-justify text-gray-400 font-normal">
          {overview}
        </p>
      </div>
    </article>
  )
}

export default SimilarCard
