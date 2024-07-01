import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addPopular} from '../Redux/Slices/movieSlice'

const usePopularMovies = (url) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector((store) => store.movieSlice.popularMovies)
  useEffect(() => {
    data || fetchPopularMovies()
  }, [])
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?page=1',
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addPopular(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default usePopularMovies
