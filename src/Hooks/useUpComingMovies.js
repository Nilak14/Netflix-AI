import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addUpComing} from '../Redux/Slices/movieSlice'

const useUpComingMovies = (url) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchUpComingMovies()
  }, [])
  const fetchUpComingMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1',
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addUpComing(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useUpComingMovies
