import {IMG_LINK} from '../../utils/constant'

const InfiniteCard = ({data}) => {
  return (
    <article className="flex flex-col gap-3 mb-2 ">
      <img
        className="h-[300px] object-cover rounded-md"
        src={IMG_LINK + data.poster_path}
        alt={data.title ?? data.name}
      />
      <h1 className="font-bold tracking-wider">{data.title ?? data.name}</h1>
    </article>
  )
}
export default InfiniteCard
