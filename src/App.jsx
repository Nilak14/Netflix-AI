import {Provider} from 'react-redux'
import mainStore from './Redux/mainStore'
import LoginPage from './pages/LoginPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './pages/Error'
import AppLayout from './Layout/AppLayout'
import BrowseLayout from './Layout/BrowseLayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'

const App = () => {
  return (
    <>
      <Provider store={mainStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<LoginPage />} />
              <Route path="browse" element={<BrowseLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="tvseries" element={<TvSeries />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App
