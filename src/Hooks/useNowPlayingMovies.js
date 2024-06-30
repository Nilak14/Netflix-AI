import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addNowPlaying} from '../Redux/Slices/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchNowPlayingVideos()
  }, [])
  const fetchNowPlayingVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=1`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
        return
      }
      const data = await response.json()
      dispatch(addNowPlaying(data.results))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useNowPlayingMovies
