import {useSearchParams} from 'react-router-dom'
import InfiniteCard from '../components/UI/InfiniteCard'
import useSearch from '../Hooks/useSearch'
import {useState} from 'react'

const BigSearchPage = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const [activeModelIndex, setActiveModelIndex] = useState(null)
  const query = searchParam.get('search')
  let searchResult = useSearch(query)
  searchResult = searchResult.filter(
    (item) => item.media_type !== 'person' && item?.poster_path !== null
  )
  const closeModel = (index) => {
    setActiveModelIndex((prev) => prev === index && null)
  }
  const openModel = (index) => {
    setActiveModelIndex(index)
  }

  if (searchResult.length === 0) {
    return (
      <section className=" bg-neutral-900  flex justify-center flex-col items-center gap-3 min-h-[calc(100vh-166px)]  sm:min-h-[calc(100vh-90px)] ">
        <div className="absolute bg-neutral-900 w-full h-[70px] top-[-70px]"></div>
        <h1 className="mt-20 text-center font-bold text-2xl capitalize tracking-wider">
          No search Result Found
        </h1>
      </section>
    )
  }
  return (
    <section className=" bg-neutral-900  flex justify-center flex-col items-center gap-3 min-h-[calc(100vh-166px)]  sm:min-h-[calc(100vh-90px)] ">
      <div className="absolute bg-neutral-900 w-full h-[70px] top-[-70px]"></div>
      <section className="mt-14 w-[85%] m-auto pb-5">
        <h1 className="font-bold text-xl tracking-wider mb-3 ">
          Search Results for {query}:
        </h1>
        <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 w-[min(80vw,1800px)] m-auto mt-[50px] font-bold tracking-wider">
          {searchResult.map((movies, index) => {
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
    </section>
  )
}
export default BigSearchPage
