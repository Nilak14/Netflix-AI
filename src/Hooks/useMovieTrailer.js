import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {addTrailer} from '../Redux/Slices/movieSlice'

const useMovieTrailer = (movieId) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    fetchMovieTrailerData()
  }, [])
  const fetchMovieTrailerData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addTrailer(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useMovieTrailer
