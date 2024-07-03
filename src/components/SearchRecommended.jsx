import {useSelector} from 'react-redux'
import usePopularMovies from '../Hooks/usePopularMovies'
import InfiniteCard from './UI/InfiniteCard'
const SearchRecommended = () => {
  usePopularMovies()
  const popularMovies = useSelector((store) => store.movieSlice.popularMovies)
  if (!popularMovies) return
  return (
    <section className="mt-14 w-[85%] m-auto pb-5">
      <h1 className="font-bold text-xl tracking-wider mb-3 ">
        Recommended Movies and Shows
      </h1>
      {popularMovies.map((movies) => {
        return <InfiniteCard key={movies.id} data={movies} />
      })}
    </section>
  )
}
export default SearchRecommended
