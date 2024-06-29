import {Outlet, useNavigate} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {auth} from '../Firebase/firebase'
import {addUser, removeUser} from '../Redux/Slices/userSlice'
import Header from '../components/Header'
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
  return (
    <section className="relative">
      <Header />
      <Outlet />
    </section>
  )
}
export default AppLayout
