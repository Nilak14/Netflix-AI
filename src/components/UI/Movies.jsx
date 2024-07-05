import {IMG_LINK} from '../../utils/constant'
import MovieModel from './MovieModel'

const Movies = ({movie, isActive, open, close}) => {
  const imageUrl = IMG_LINK + movie.poster_path
  return (
    <>
      <img
        onClick={() => {
          open()
        }}
        className="h-[240px] cursor-pointer "
        src={imageUrl}
        alt={movie.title}
      />
      {isActive && (
        <MovieModel
          type={'movie'}
          id={movie.id}
          close={close}
          location="home"
        />
      )}
    </>
  )
}
export default Movies
