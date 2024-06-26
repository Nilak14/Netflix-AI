import {useSelector} from 'react-redux'
import {auth} from '../Firebase/firebase'
import {signOut} from 'firebase/auth'
import mainStore from '../Redux/mainStore'
const Header = () => {
  const user = useSelector((store) => store.userSlice)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <header className="w-full    p-3  lg:px-36 lg:py-2">
      <img
        className="w-[110px] md:w-[180px] "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
      {user && (
        <button
          className="bg-black text-white px-2 py-1"
          onClick={() => {
            handleSignOut()
          }}
        >
          Out
        </button>
      )}
    </header>
  )
}
export default Header
