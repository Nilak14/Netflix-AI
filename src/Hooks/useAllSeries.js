import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {API_OPTIONS} from '../utils/constant'

import {addSeries} from '../Redux/Slices/infiniteSeriesSlice'

const useAllSeries = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const seriesData = useSelector(
    (store) => store.infiniteSeriesSlice.seriesList
  )
  useEffect(() => {
    seriesData.length === 0 && fetchAllSeries()
  }, [])
  const fetchAllSeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()

      dispatch(addSeries(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useAllSeries
