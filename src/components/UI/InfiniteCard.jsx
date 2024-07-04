import {IMG_LINK} from '../../utils/constant'
import MovieModel from './MovieModel'

const InfiniteCard = ({data, isActive, open, close}) => {
  if (!data.poster_path) {
    return
  }

  return (
    <article>
      <article
        onClick={() => {
          open()
        }}
        className="flex flex-col gap-3 mb-2 overflow-hidden "
      >
        <img
          className="h-[300px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
          src={IMG_LINK + data.poster_path}
          alt={data.title ?? data.name}
        />
        <h1 className="font-bold tracking-wider">{data.title ?? data.name}</h1>
      </article>
      {isActive && <MovieModel close={close} />}
    </article>
  )
}
export default InfiniteCard
