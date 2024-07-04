import InfiniteScroll from 'react-infinite-scroll-component'
import {useSelector} from 'react-redux'
import fetchInfiniteMovie from '../Hooks/fetchInfiniteMovie'
import InfiniteCard from './UI/InfiniteCard'
import fetchInfiniteSeries from '../Hooks/fetchInfiniteSeries'
import {useState} from 'react'

const InfiniteScrollSection = ({type}) => {
  const [activeModelIndex, setActiveModelIndex] = useState(null)
  const closeModel = (index) => {
    setActiveModelIndex((prev) => prev === index && null)
  }
  const openModel = (index) => {
    setActiveModelIndex(index)
  }
  let data =
    type === 'movie'
      ? useSelector((store) => store.infiniteMovieSlice.movieList)
      : useSelector((store) => store.infiniteSeriesSlice.seriesList)

  const fetch = type === 'movie' ? fetchInfiniteMovie() : fetchInfiniteSeries()

  if (!data) return //todo shimmer

  data = data.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  )
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-[min(90vw,1800px)] m-auto  ">
      {data.map((item, index) => {
        if (index === 0) return
        return (
          <InfiniteCard
            isActive={activeModelIndex === index}
            open={() => openModel(index)}
            close={() => closeModel(index)}
            key={item.id}
            data={item}
          />
        )
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
