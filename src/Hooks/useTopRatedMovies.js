import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addTopRated} from '../Redux/Slices/movieSlice'

const useTopRatedMovies = (url) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchTopRatedMovies()
  }, [])
  const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?page=1',
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addTopRated(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useTopRatedMovies
