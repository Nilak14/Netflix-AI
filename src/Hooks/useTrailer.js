import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {addWatchVideo} from '../Redux/Slices/movieSlice'
import {useNavigate} from 'react-router-dom'

const useTrailer = (type, url, videoId) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetchTrailer()
  }, [url])

  const fetchTrailer = async () => {
    try {
      const response = await fetch(url, API_OPTIONS)
      if (!response.ok) {
        navigate('/error')
      }
      const data = await response.json()
      let videoList = data?.results
      videoList =
        videoList.filter((items) => items?.type === 'Trailer')[0] ?? 'no'
      if (videoList === 'no') {
        dispatch(addWatchVideo('no'))
      } else {
        dispatch(addWatchVideo({...videoList, videoId}))
      }
    } catch (error) {
      navigate('/error')
    }
  }
}
export default useTrailer
