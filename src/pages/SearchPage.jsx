import {Link, useNavigate} from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import {FaArrowLeft} from 'react-icons/fa6'
import {useEffect, useState} from 'react'
import SearchRecommend from '../components/SearchRecommended'
import SearchResult from '../components/SearchResult'
import useSearch from '../Hooks/useSearch'
const SearchPage = () => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const searchResult = useSearch(searchText)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        navigate('/browse')
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navigate])
  return (
    <section className="bg-neutral-900 min-h-screen px-4 text-white sm:hidden  ">
      <div className="min-h-[70px]   flex items-center">
        <Link className="hover:scale-110" to={'/browse'}>
          <FaArrowLeft className="text-white text-2xl" />
        </Link>
      </div>
      <SearchForm state={searchText} setState={setSearchText} />
      {searchText === '' ? (
        <SearchRecommend />
      ) : (
        <SearchResult data={searchResult} />
      )}
    </section>
  )
}
export default SearchPage