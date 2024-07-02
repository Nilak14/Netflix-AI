import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import mainStore from './Redux/mainStore'
import LoginPage from './pages/LoginPage'
import BrowsePage from './pages/BrowsePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './pages/Error'
import MoviesPage from './pages/MoviesPage'
import TvSeriesPage from './pages/TvSeriesPage'
import BrowseLayout from './BrowseLayout'
import AISearch from './pages/AISearch'

function App() {
  return (
    <>
      <Provider store={mainStore}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<AppLayout />}>
              <Route index element={<LoginPage />} />
              <Route path={'browse'} element={<BrowseLayout />}>
                <Route index element={<BrowsePage />} />
                <Route path={'movies'} element={<MoviesPage />} />
                <Route path={'series'} element={<TvSeriesPage />} />
                <Route path={'ai_search'} element={<AISearch />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
