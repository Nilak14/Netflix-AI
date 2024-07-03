import {useSearchParams} from 'react-router-dom'
import InfiniteCard from '../components/UI/InfiniteCard'
import useSearch from '../Hooks/useSearch'

const BigSearchPage = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const query = searchParam.get('search')
  const searchResult = useSearch(query)
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
          Search Results:
        </h1>
        <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 w-[min(80vw,1800px)] m-auto mt-[50px] font-bold tracking-wider">
          {searchResult.map((movies) => {
            return <InfiniteCard key={movies.id} data={movies} />
          })}
        </div>
      </section>
    </section>
  )
}
export default BigSearchPage
