import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {addSimilarMovies} from '../Redux/Slices/similarSlice'
import {useNavigate} from 'react-router-dom'

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchSimilarMovies()
  }, [movieId])
  const fetchSimilarMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
      }
      const data = await response.json()
      dispatch(addSimilarMovies(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useSimilarMovies
