import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {API_OPTIONS} from '../utils/constant'
import {addMovie} from '../Redux/Slices/infiniteMoviesSlice'

const useAllMovies = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const movieData = useSelector((store) => store.infiniteMovieSlice.movieList)
  useEffect(() => {
    movieData.length === 0 && fetchAllMovies()
  }, [])
  const fetchAllMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()

      dispatch(addMovie(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useAllMovies
