import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {addTrailer} from '../Redux/Slices/movieSlice'
import {addTvSeriesTrailer} from '../Redux/Slices/tvSeriesSlice'

const useMovieTrailer = (id, type = 'movie') => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    fetchMovieTrailerData()
  }, [])
  const fetchMovieTrailerData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      if (type === 'movie') {
        dispatch(addTrailer(data.results))
      } else if (type === 'tvseries') {
        dispatch(addTvSeriesTrailer(data.results))
      }
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useMovieTrailer
