import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {addSeriesDetails} from '../Redux/Slices/movieSlice'

const useSeriesDetails = (seriesId) => {
  const dispatch = useDispatch()
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
        console.log('ok error')
        return
      }
      const data = response.json()
      dispatch(addSeriesDetails(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export default useSeriesDetails
