import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import mainStore from './Redux/mainStore'
import LoginPage from './pages/LoginPage'
import BrowsePage from './pages/BrowsePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './pages/Error'

const App = () => {
  return (
    <>
      <Provider store={mainStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<LoginPage />} />
              <Route path="browse" element={<BrowsePage />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App
