import {useSelector} from 'react-redux'
import {Outlet, useNavigate} from 'react-router-dom'
import BigSearchPage from './pages/BigSearchPage'
import {useEffect} from 'react'

const BrowseLayout = () => {
  const isSearched = useSelector((store) => store.SearchSlice.isSearchPageOn)
  const userLoggedIn = useSelector((store) => store.userSlice.userLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/')
    }
  })
  return (
    <main className=" bg-neutral-900 text-white pb-24  sm:pb-5 relative">
      {isSearched ? <BigSearchPage /> : <Outlet />}
    </main>
  )
}
export default BrowseLayout
