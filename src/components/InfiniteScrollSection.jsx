import InfiniteScroll from 'react-infinite-scroll-component'
import {useSelector} from 'react-redux'
import fetchInfiniteMovie from '../Hooks/fetchInfiniteMovie'
import InfiniteCard from './UI/InfiniteCard'

const InfiniteScrollSection = ({type}) => {
  let data =
    type === 'movie' &&
    useSelector((store) => store.infiniteMovieSlice.movieList)
  const fetch = fetchInfiniteMovie()

  if (!data) return //todo shimmer
  data = data.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  )
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-[min(90vw,1800px)] m-auto ">
      {data.map((item, index) => {
        if (index === 0) return
        return <InfiniteCard key={item.id} data={item} />
      })}
      <InfiniteScroll
        dataLength={data.length}
        next={fetch}
        hasMore={true}
        loader={<h4>Loading...</h4>} //todo shimmer
      ></InfiniteScroll>
    </section>
  )
}
export default InfiniteScrollSection
