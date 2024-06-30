import {IMG_LINK} from '../../utils/constant'

const Movies = ({movie}) => {
  const imageUrl = IMG_LINK + movie.poster_path
  return <img className="h-[240px]" src={imageUrl} alt={movie.title} />
}
export default Movies
