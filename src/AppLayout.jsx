import {Outlet, useNavigate} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase/firebase'
import {useEffect} from 'react'
import {addUser, removeUser} from './Redux/Slices/userSlice'
import {useDispatch} from 'react-redux'
import Header from './components/Header'
const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user
        dispatch(addUser({uid, email, displayName}))

        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    })
  }, [])
  return (
    <section className="bg-black sm:bg-transparent h-screen">
      <Header />
      <Outlet />
    </section>
  )
}
export default AppLayout
// div className="font-roboto"
