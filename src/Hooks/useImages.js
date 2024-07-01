import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addMoviesImage, addSeriesImages} from '../Redux/Slices/movieSlice'
import {API_OPTIONS} from '../utils/constant'

const useImages = (url, type) => {
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
        console.log('ok error')
        return
      }
      const data = await response.json()
      type === 'movie'
        ? dispatch(addMoviesImage(data))
        : dispatch(addSeriesImages(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export default useImages
