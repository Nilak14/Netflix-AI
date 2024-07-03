import {Outlet, useNavigate} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase/firebase'
import {useEffect} from 'react'
import {addUser, removeUser} from './Redux/Slices/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import SearchPage from './pages/SearchPage'
const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user
        dispatch(addUser({uid, email, displayName}))
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    })
    return () => unsubscribe()
  }, [])
  const isSearchPageOn = useSelector(
    (store) => store.SearchSlice.isSearchPageOn
  )
  return (
    <section className="relative ">
      <Header />
      <Outlet />
      <MobileNav />
    </section>
  )
}
export default AppLayout
