import useAllSeries from '../Hooks/useAllSeries'
import InfiniteScrollSection from '../components/InfiniteScrollSection'
import PosterSection from '../components/PosterSection'

const TvSeriesPage = () => {
  useAllSeries()
  return (
    <section>
      <PosterSection type={'series'} />
      <InfiniteScrollSection type={'series'} />
    </section>
  )
}
export default TvSeriesPage
