import useAllSeries from '../Hooks/useAllSeries'
import useModel from '../Hooks/useModel'
import InfiniteScrollSection from '../components/InfiniteScrollSection'
import PosterSection from '../components/PosterSection'
import MovieModel from '../components/UI/MovieModel'

const TvSeriesPage = () => {
  const [openModel, closeModel, isModelActive] = useModel()
  useAllSeries()
  return (
    <section>
      <PosterSection
        close={() => closeModel()}
        open={() => openModel()}
        type={'series'}
      />
      <InfiniteScrollSection type={'series'} />
      {isModelActive && <MovieModel close={() => closeModel()} />}
    </section>
  )
}
export default TvSeriesPage
