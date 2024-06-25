import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import BrowsePage from './pages/BrowsePage'
import LoginPage from './pages/LoginPage'

const AppLayout = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/browse',
      element: <BrowsePage />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default AppLayout
// div className="font-roboto"
