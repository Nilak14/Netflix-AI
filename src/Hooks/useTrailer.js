import {useEffect} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch} from 'react-redux'
import {addWatchVideo} from '../Redux/Slices/movieSlice'

const useTrailer = (type, url, videoId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchTrailer()
  }, [url])

  const fetchTrailer = async () => {
    try {
      const response = await fetch(url, API_OPTIONS)
      if (!response.ok) {
        console.log('ok error')
        return
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
      console.log(error)
    }
  }
}
export default useTrailer
