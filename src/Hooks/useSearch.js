import {useEffect, useState} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch, useSelector} from 'react-redux'
import {addDataToCache} from '../Redux/Slices/SearchSlice'

const useSearch = (searchQuery) => {
  const [searchResult, setSearchResult] = useState([])
  const dispatch = useDispatch()
  const cachedData = useSelector((store) => store.SearchSlice.cachedData)
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (cachedData[searchQuery]) {
        setSearchResult(cachedData[searchQuery])
      } else {
        fetchSearchResult()
      }
    }, 300)
    return () => clearTimeout(debounceTimer)
  }, [searchQuery])
  const fetchSearchResult = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&page=1`,
        API_OPTIONS
      )
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      dispatch(addDataToCache({[searchQuery]: data.results}))
      setSearchResult(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  return searchResult
}
export default useSearch
