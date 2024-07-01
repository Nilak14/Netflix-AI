import {useSelector} from 'react-redux'
import useImages from '../../Hooks/useImages'
import {IMG_LINK} from '../../utils/constant'
const BGImage = ({id, type}) => {
  const fetchURL =
    type === 'movie'
      ? `https://api.themoviedb.org/3/movie/${id}/images`
      : `https://api.themoviedb.org/3/tv/${id}/images`
  useImages(fetchURL, type)

  const imageData =
    type === 'movie'
      ? useSelector((store) => store.movieSlice.movieImages)?.backdrops[0]
      : useSelector((store) => store.movieSlice.seriesImages)?.backdrops[0]

  return (
    <div className="translate-y-[-70px] brightness-75">
      <img
        className="aspect-[16/9] w-full lg:h-[600px] lg:object-cover "
        src={IMG_LINK + imageData?.file_path}
        alt="poster"
      />
    </div>
  )
}
export default BGImage
