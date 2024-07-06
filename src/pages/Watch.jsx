import {useParams, useNavigate} from 'react-router-dom'
import useTrailer from '../Hooks/useTrailer'
import {useSelector} from 'react-redux'
import {FaArrowLeftLong} from 'react-icons/fa6'
import Spinner from '../components/Loaders/Spinner'

const Watch = () => {
  const {videoId, type} = useParams()
  const navigate = useNavigate()

  const fetchUrl =
    type === 'movie'
      ? `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`
      : `https://api.themoviedb.org/3/tv/${videoId}/videos?language=en-US`

  useTrailer(type, fetchUrl, videoId)
  const videoDetail = useSelector((store) => store.movieSlice.watchVideo)

  if (videoDetail === 'no') {
    return <VideoNotFound />
  }

  if (!videoDetail || videoDetail.videoId !== videoId) {
    return <Spinner />
  }

  return (
    <section className="w-screen  h-dvh relative">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoDetail.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div
        className="absolute top-[45px] left-[55px] text-white text-3xl cursor-pointer hover:scale-110"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong />
      </div>
    </section>
  )
}

const VideoNotFound = () => {
  const navigate = useNavigate()
  return (
    <section className="w-screen h-screen text-white flex flex-col items-center justify-center bg-neutral-900 gap-10">
      <p className="text-5xl font-serif tracking-wider">No video found</p>
      <button
        onClick={() => navigate(-1)}
        className="netflixBG p-2 rounded-lg font-bold tracking-wide hover:bg-red-700"
      >
        Go Back
      </button>
    </section>
  )
}

export default Watch
