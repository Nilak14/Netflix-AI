import InfiniteCard from './UI/InfiniteCard'

const SearchResult = ({data}) => {
  console.log(data)
  if (data.length === 0) {
    return (
      <h1 className="mt-20 text-center font-bold text-2xl capitalize tracking-wider">
        No search Result Found
      </h1>
    )
  }
  return (
    <div className="mt-14 w-[85%] m-auto pb-5">
      <h1 className="font-bold text-xl tracking-wider mb-3 ">
        Search Results:
      </h1>
      {data.map((movies) => {
        return <InfiniteCard key={movies.id} data={movies} />
      })}
    </div>
  )
}
export default SearchResult
