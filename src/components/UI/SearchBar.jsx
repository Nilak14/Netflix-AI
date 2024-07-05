import {useState, useEffect, useRef} from 'react'
import {IoSearch} from 'react-icons/io5'
import {useDispatch} from 'react-redux'
import {closeSearchPage, openSearchPage} from '../../Redux/Slices/SearchSlice'
import {useSearchParams} from 'react-router-dom'

const SearchBar = () => {
  const [isToggled, setIsToggled] = useState(false)
  const inputRef = useRef(null)
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const [searchParam, setSearchParam] = useSearchParams()

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsToggled(false)
    }
  }

  useEffect(() => {
    const params = searchText.trim() === '' ? {} : {search: searchText}
    setSearchParam(params)

    if (searchText.trim() === '') {
      dispatch(closeSearchPage())
    } else {
      dispatch(openSearchPage())
    }
  }, [searchText, setSearchParam])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  useEffect(() => {
    const currentSearch = searchParam.get('search') || ''
    if (currentSearch === '') {
      setSearchText('')
    }
  }, [searchParam])

  return (
    <form className="relative sm:inline-block hidden">
      <input
        ref={inputRef}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Movies,Series"
        className={`transition-all duration-300 ease-in-out bg-black opacity-0 text-white border border-transparent outline-none pl-9 text-lg h-9 ${
          isToggled ? 'w-60 border-white bg-black opacity-50' : 'w-0'
        }`}
      />
      <IoSearch
        onClick={handleToggle}
        className="text-white text-2xl absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
    </form>
  )
}

export default SearchBar
