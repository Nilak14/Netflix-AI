import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import mainStore from './Redux/mainStore'
import LoginPage from './pages/LoginPage'
import BrowsePage from './pages/BrowsePage'
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Error from './pages/Error'
import MoviesPage from './pages/MoviesPage'
import TvSeriesPage from './pages/TvSeriesPage'
import BrowseLayout from './BrowseLayout'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <AppLayout />,
  //     errorElement: <Error />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <LoginPage />,
  //       },
  //       {
  //         path: 'browse',
  //         element: <BrowsePage />,
  //       },
  //       {
  //         path: 'movies',
  //         element: <MoviesPage />,
  //       },
  //     ],
  //   },
  // ])
  return (
    <>
      <Provider store={mainStore}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<AppLayout />}>
              <Route index element={<LoginPage />} />
              <Route path={'browse'} element={<BrowseLayout />}>
                <Route index element={<BrowsePage />} />
                <Route path={'movies'} element={<MoviesPage />} />
                <Route path={'series'} element={<TvSeriesPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
