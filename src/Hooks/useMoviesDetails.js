import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {addMovieDetails} from '../Redux/Slices/movieSlice'

const useMoviesDetails = (movieId) => {
  const dispatch = useDispatch()
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
        console.log('ok error')
        return
      }
      const data = await response.json()
      dispatch(addMovieDetails(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export default useMoviesDetails
