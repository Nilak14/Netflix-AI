import useAllMovies from '../Hooks/useAllMovies'
import InfiniteScrollSection from '../components/InfiniteScrollSection'
import PosterSection from '../components/PosterSection'

const MoviesPage = () => {
  useAllMovies()
  return (
    <section>
      <PosterSection type={'movie'} />
      <InfiniteScrollSection type={'movie'} />
    </section>
  )
}
export default MoviesPage
