import {useEffect, useState} from 'react'
import {API_OPTIONS} from '../utils/constant'
import {useDispatch, useSelector} from 'react-redux'
import {addDataToCache} from '../Redux/Slices/SearchSlice'
import {useNavigate} from 'react-router-dom'

const useSearch = (searchQuery) => {
  const [searchResult, setSearchResult] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
        `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=true&page=1`,
        API_OPTIONS
      )
      if (!response.ok) {
        navigate('/error')
      }
      const data = await response.json()
      dispatch(addDataToCache({[searchQuery]: data.results}))
      setSearchResult(data.results)
    } catch (error) {
      navigate('/error')
    }
  }
  return searchResult
}
export default useSearch
