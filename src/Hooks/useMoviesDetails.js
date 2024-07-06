import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {addMovieDetails} from '../Redux/Slices/movieSlice'
import {useNavigate} from 'react-router-dom'

const useMoviesDetails = (movieId) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchMovieDetails()
  }, [movieId])
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addMovieDetails(data))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useMoviesDetails
