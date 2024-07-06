import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import {addSimilarMovies} from '../Redux/Slices/similarSlice'

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch()
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
        console.log('ok error')
        return
      }
      const data = await response.json()
      dispatch(addSimilarMovies(data.results))
    } catch (error) {
      console.log(error)
    }
  }
}
export default useSimilarMovies
