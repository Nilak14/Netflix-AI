import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addMovie, increasePage} from '../Redux/Slices/infiniteMoviesSlice'
import {API_OPTIONS} from '../utils/constant'

const fetchInfiniteMovie = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentPage = useSelector(
    (store) => store.infiniteMovieSlice.currentPage
  )

  const fetchAllMovies = async () => {
    dispatch(increasePage())
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
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

  return fetchAllMovies
}

export default fetchInfiniteMovie
