import {IMG_LINK} from '../../utils/constant'

const Movies = ({movie}) => {
  const imageUrl = IMG_LINK + movie.poster_path
  return <img className="w-48" src={imageUrl} alt={movie.title} />
}
export default Movies
