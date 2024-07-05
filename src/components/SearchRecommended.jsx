import {useSelector} from 'react-redux'
import usePopularMovies from '../Hooks/usePopularMovies'
import InfiniteCard from './UI/InfiniteCard'
import {useState} from 'react'
const SearchRecommended = () => {
  usePopularMovies()
  const popularMovies = useSelector((store) => store.movieSlice.popularMovies)
  const [activeModelIndex, setActiveModelIndex] = useState(null)
  const closeModel = (index) => {
    setActiveModelIndex((prev) => prev === index && null)
  }
  const openModel = (index) => {
    setActiveModelIndex(index)
  }
  if (!popularMovies) return
  return (
    <section className="mt-14 w-[85%] m-auto pb-5">
      <h1 className="font-bold text-xl tracking-wider mb-3 ">
        Recommended Movies and Shows
      </h1>
      <div className="flex flex-col gap-8">
        {popularMovies.map((movies, index) => {
          return (
            <InfiniteCard
              isActive={activeModelIndex === index}
              open={() => openModel(index)}
              close={() => closeModel(index)}
              key={movies.id}
              data={movies}
              type={'movie'}
            />
          )
        })}
      </div>
    </section>
  )
}
export default SearchRecommended
