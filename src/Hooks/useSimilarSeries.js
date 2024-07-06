import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {useEffect} from 'react'
import {addSimilarSeries} from '../Redux/Slices/similarSlice'
import {useNavigate} from 'react-router-dom'

const useSimilarSeries = (seriesId) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
        navigate('/error')
      }
      const data = await response.json()
      dispatch(addSimilarSeries(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useSimilarSeries
