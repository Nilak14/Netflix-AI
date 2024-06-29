import {Outlet} from 'react-router-dom'

const BrowseLayout = () => {
  return (
    <main className=" bg-[#141414] text-white pb-[40px]">
      <Outlet />
    </main>
  )
}
export default BrowseLayout
