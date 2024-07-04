import {Outlet, useNavigate} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase/firebase'
import {useEffect} from 'react'
import {initializeUser} from './Redux/Slices/userSlice'
import {useDispatch} from 'react-redux'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email} = user
        dispatch(initializeUser({uid, email}))
      } else {
        dispatch(initializeUser(null))
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <section className="relative ">
      <Header />
      <Outlet />
      <MobileNav />
    </section>
  )
}
export default AppLayout
