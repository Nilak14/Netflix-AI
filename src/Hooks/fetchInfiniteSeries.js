import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {API_OPTIONS} from '../utils/constant'
import {addSeries, increasePage} from '../Redux/Slices/infiniteSeriesSlice'

const fetchInfiniteSeries = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentPage = useSelector(
    (store) => store.infiniteSeriesSlice.currentPage
  )

  const fetchAllSeries = async () => {
    dispatch(increasePage())
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
        API_OPTIONS
      )
      if (!response.ok) {
        console.log('ok error')
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addSeries(data.results))
    } catch (error) {
      console.log(error)
      navigate('/error')
    }
  }

  return fetchAllSeries
}

export default fetchInfiniteSeries
