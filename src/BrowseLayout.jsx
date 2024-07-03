import {useSelector} from 'react-redux'
import {Outlet} from 'react-router-dom'
import BigSearchPage from './pages/BigSearchPage'

const BrowseLayout = () => {
  const isSearched = useSelector((store) => store.SearchSlice.isSearchPageOn)
  return (
    <main className=" bg-neutral-900 text-white pb-24  sm:pb-5 relative">
      {isSearched ? <BigSearchPage /> : <Outlet />}
    </main>
  )
}
export default BrowseLayout
