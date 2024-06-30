import {Outlet} from 'react-router-dom'

const BrowseLayout = () => {
  return (
    <main className=" bg-neutral-900 text-white pb-24  sm:pb-5">
      <Outlet />
    </main>
  )
}
export default BrowseLayout
