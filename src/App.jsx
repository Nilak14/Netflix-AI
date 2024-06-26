import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import mainStore from './Redux/mainStore'
import LoginPage from './pages/LoginPage'
import BrowsePage from './pages/BrowsePage'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <LoginPage />,
        },
        {
          path: '/browse',
          element: <BrowsePage />,
        },
      ],
    },
  ])
  return (
    <>
      <Provider store={mainStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
