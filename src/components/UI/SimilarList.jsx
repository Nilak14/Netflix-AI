import {useSelector} from 'react-redux'
import SimilarCard from './SimilarCard'

const SimilarList = ({type}) => {
  let data =
    type === 'movie'
      ? useSelector((store) => store.similarSlice.similarMovies)
      : useSelector((store) => store.similarSlice.similarSeries)

  if (!data) {
    return <h1>Loading.....</h1>
  }
  data = data.filter((items) => items.backdrop_path)
  return (
    <>
      {data.length > 0 && (
        <h1 className="px-6 text-2xl  font-bold tracking-wider mb-4 mt-4">
          More Like This :
        </h1>
      )}

      <section className="grid grid-cols-2 md:grid-cols-3 gap-8 px-6 mt-3">
        {data.map((items) => (
          <SimilarCard key={items.id} data={items} type={type} />
        ))}
      </section>
    </>
  )
}
export default SimilarList
