import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {MdHome, MdMovie} from 'react-icons/md'
import {BiSolidTv} from 'react-icons/bi'
const MobileNav = () => {
  const user = useSelector((store) => store.userSlice)
  return (
    <section className="sm:hidden fixed bottom-0 bg-black w-full z-10 h-16 shadow-2xl shadow-white">
      {user && (
        <nav className="flex h-full justify-center items-center">
          <ul className="flex  font-bold tracking-wider items-center justify-between w-full ">
            <li className=" text-white py-2 px-4 rounded-lg hover:netflixText">
              <NavLink
                className={({isActive}) =>
                  isActive ? 'netflixText' : undefined
                }
                end
                to={'/browse'}
              >
                <div className="flex flex-col items-center">
                  <MdHome className="text-2xl" />
                  Home
                </div>
              </NavLink>
            </li>
            <li className=" text-white py-2 px-4 rounded-lg hover:netflixText">
              <NavLink
                className={({isActive}) =>
                  isActive ? 'netflixText' : undefined
                }
                to={'/browse/movies'}
              >
                <div className="flex flex-col items-center">
                  <MdMovie className="text-xl" />
                  Movies
                </div>
              </NavLink>
            </li>
            <li className=" text-white py-2 px-4 rounded-lg hover:netflixText ">
              <NavLink
                className={({isActive}) =>
                  isActive ? 'netflixText' : undefined
                }
                to={'/browse/series'}
              >
                <div className="flex flex-col items-center">
                  <BiSolidTv className="text-xl" />
                  <p className="text-nowrap">Tv Series</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </section>
  )
}
export default MobileNav
