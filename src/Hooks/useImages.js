import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addMoviesImage, addSeriesImages} from '../Redux/Slices/movieSlice'
import {API_OPTIONS} from '../utils/constant'
import {useNavigate} from 'react-router-dom'

const useImages = (url, type) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const imageData =
    type === 'movie'
      ? useSelector((store) => store.movieSlice.movieImages)?.backdrops[0]
      : useSelector((store) => store.movieSlice.seriesImages)?.backdrops[0]
  useEffect(() => {
    imageData || fetchImages()
  }, [])
  const fetchImages = async () => {
    try {
      const response = await fetch(url, API_OPTIONS)
      if (!response.ok) {
        navigate('/error')
      }
      const data = await response.json()
      type === 'movie'
        ? dispatch(addMoviesImage(data))
        : dispatch(addSeriesImages(data))
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useImages
