import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {addOnTheAir} from '../Redux/Slices/tvSeriesSlice'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'

const useOnTheAirSeries = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    fetchOnTheAirSeries()
  }, [])

  const fetchOnTheAirSeries = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/tv/on_the_air?page=1',
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/r')
        return
      }
      const data = await response.json()
      dispatch(addOnTheAir(data.results))
    } catch (error) {
      console.log(error)
      //   navigate('/c')
    }
  }
}
export default useOnTheAirSeries
