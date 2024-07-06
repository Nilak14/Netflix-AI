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
    return <h1>No video found</h1>
  }

  if (!videoDetail || videoDetail.videoId !== videoId) {
    return <Spinner />
  }

  return (
    <section className="w-screen h-screen relative">
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

export default Watch
