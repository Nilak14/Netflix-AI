import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import mainStore from './Redux/mainStore'

function App() {
  return (
    <>
      <Provider store={mainStore}>
        <AppLayout />
      </Provider>
    </>
  )
}

export default App
