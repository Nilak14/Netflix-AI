import {useSelector} from 'react-redux'

import {FACE_URL, NETFLIX_LOGO_URL} from '../utils/constant'
import {useState, useEffect} from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import {IoSearch} from 'react-icons/io5'
import {useDispatch} from 'react-redux'
import SearchBar from './UI/SearchBar'
import {closeSearchPage} from '../Redux/Slices/SearchSlice'
import {doSignOut} from '../Firebase/auth'

const Header = () => {
  const user = useSelector((store) => store.userSlice.userLoggedIn)
  const [isScrolled, setIsScrolled] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignOut = () => {
    doSignOut().then(() => navigate('/'))
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`w-full ${
        isScrolled ? 'bg-black' : 'sm:bg-transparent'
      } sticky top-0 p-3 max-h-[70px] lg:pl-36 lg:pr-10 lg:py-2 flex items-center justify-between z-20 ${
        user || 'bg-black'
      } transition-colors ease-in-out duration-[700ms] `}
    >
      <div className="flex text-white items-center">
        <img
          className="w-[110px] md:w-[180px]"
          src={NETFLIX_LOGO_URL}
          alt="netflix logo"
        />
        {user && (
          <nav className=" hidden sm:block ml-4 ">
            <ul className="flex gap-4 font-bold">
              <li className="hover:netflixText">
                <NavLink
                  onClick={() => dispatch(closeSearchPage())}
                  className={({isActive}) =>
                    isActive ? 'netflixText' : undefined
                  }
                  to={'/browse'}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:netflixText">
                <NavLink
                  onClick={() => dispatch(closeSearchPage())}
                  className={({isActive}) =>
                    isActive ? 'netflixText' : undefined
                  }
                  to={'/browse/movies'}
                >
                  Movies
                </NavLink>
              </li>
              <li className="hover:netflixText">
                <NavLink
                  onClick={() => dispatch(closeSearchPage())}
                  className={({isActive}) =>
                    isActive ? 'netflixText' : undefined
                  }
                  to={'/browse/series'}
                >
                  Tv Series
                </NavLink>
              </li>
              <li className="hover:netflixText">
                <NavLink
                  onClick={() => dispatch(closeSearchPage())}
                  className={({isActive}) =>
                    isActive ? 'netflixText' : undefined
                  }
                  to={'/browse/ai_search'}
                >
                  AI Search
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {user && (
        <div className="rounded-md relative cursor-pointer flex items-center gap-1">
          {/* search for big screen */}
          <div className="-translate-x-2">
            <SearchBar />
          </div>
          <img className="rounded-md  hidden sm:block" src={FACE_URL} alt="" />
          {/* search for mobile only */}
          <Link to={'/search'} className="sm:hidden hover:scale-110">
            <IoSearch className="text-white text-xl mr-3" />
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-black p-1 sm:px-2 sm:py-1 text-white rounded-md hover:scale-105 transition-transform"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
