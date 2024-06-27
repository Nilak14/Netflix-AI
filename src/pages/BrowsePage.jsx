import {useSelector} from 'react-redux'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const BrowsePage = () => {
  useNowPlayingMovies()
  const nowPlayingMovies = useSelector(
    (store) => store.movieSlice?.nowPlayingMovies
  )
  console.log(nowPlayingMovies)
  return (
    <main className="pt-[70px] sm:pt-0 border-2 border-black">BrowsePage</main>
  )
}
export default BrowsePage
