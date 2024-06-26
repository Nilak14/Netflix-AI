import {useSelector} from 'react-redux'
import {auth} from '../Firebase/firebase'
import {signOut} from 'firebase/auth'
import {FACE_URL, NETFLIX_LOGO_URL} from '../utils/constant'

import {useState} from 'react'

const Header = () => {
  const user = useSelector((store) => store.userSlice)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <header className="w-full absolute sm:relative sm:bg-transparent  p-3 max-h-[70px]  lg:pl-36 lg:pr-10 lg:py-2 flex items-center  justify-between ">
      <img
        className="w-[110px] md:w-[180px] "
        src={NETFLIX_LOGO_URL}
        alt="netflix logo"
      />
      {user && (
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md relative  cursor-pointer  flex items-center gap-1"
        >
          <img className="rounded-md" src={FACE_URL} alt="" />
          <button
            onClick={handleSignOut}
            className="bg-black px-2 py-1 text-white rounded-md hover:scale-105 transition-transform"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}
export default Header
