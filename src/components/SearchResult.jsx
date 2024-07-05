import {useState} from 'react'
import InfiniteCard from './UI/InfiniteCard'

const SearchResult = ({data, text}) => {
  const [activeModelIndex, setActiveModelIndex] = useState(null)
  const closeModel = (index) => {
    setActiveModelIndex((prev) => prev === index && null)
  }
  const openModel = (index) => {
    setActiveModelIndex(index)
  }
  if (data.length === 0) {
    return (
      <h1 className="mt-20 text-center font-bold text-2xl capitalize tracking-wider">
        No search Result Found
      </h1>
    )
  }
  return (
    <section className="mt-14 w-[85%] m-auto pb-5">
      <h1 className="font-bold text-xl tracking-wider mb-3 ">
        Search Results for {text}:
      </h1>
      <div className="flex flex-col gap-8">
        {data.map((movies, index) => {
          const type =
            movies.media_type === 'movie' ? movies.media_type : 'series'
          return (
            <InfiniteCard
              isActive={activeModelIndex === index}
              open={() => openModel(index)}
              close={() => closeModel(index)}
              key={movies.id}
              data={movies}
              type={type}
            />
          )
        })}
      </div>
    </section>
  )
}
export default SearchResult
