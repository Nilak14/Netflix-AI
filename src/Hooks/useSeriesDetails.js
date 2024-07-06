import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {addSeriesDetails} from '../Redux/Slices/movieSlice'
import {useNavigate} from 'react-router-dom'

const useSeriesDetails = (seriesId) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchSeriesDetails()
  }, [seriesId])
  const fetchSeriesDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
      }
      const data = await response.json()
      dispatch(addSeriesDetails(data))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useSeriesDetails
