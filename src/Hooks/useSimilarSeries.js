import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {useEffect} from 'react'
import {addSimilarSeries} from '../Redux/Slices/similarSlice'

const useSimilarSeries = (seriesId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchSimilarSeries()
  }, [seriesId])
  const fetchSimilarSeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${seriesId}/similar?language=en-US&page=1`,
        API_OPTIONS
      )
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      dispatch(addSimilarSeries(data.results))
    } catch (error) {
      console.log(error)
    }
  }
}
export default useSimilarSeries
