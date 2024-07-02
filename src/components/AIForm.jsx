import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {API_OPTIONS} from '../utils/constant'
import run from '../Gemini/gemini'
import {addGeneratedResult} from '../Redux/Slices/geminiSlice'
import {IoIosSearch} from 'react-icons/io'

const AIForm = ({loadingState}) => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  // search in tmdb api
  const searchMovieFromTMDB = async (name) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&page=1`,
      API_OPTIONS
    )

    const data = await response.json()
    return data.results
  }

  // function for ai
  const searchGemini = async () => {
    if (searchText.trim() == '') {
      return
    }
    loadingState(true)
    const prompt = `act as a movie recommendation system and suggest only 5 movie for the prompt: ${searchText}. Give answer in comma separated values as given example. example: ironman, Thor, Captain America remember to provide result in given example just provide movie names like in example. If the prompt is not related to movies and series just say 'null'.`
    const result = await run(prompt)
    setSearchText('')
    const generatedResult = result.split(',')

    // search fro each movie

    const promiseArr = generatedResult.map((result) => {
      return searchMovieFromTMDB(result)
    })

    const tmdbResults = await Promise.all(promiseArr)
    dispatch(addGeneratedResult(tmdbResults))
    loadingState(false)
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" flex flex-col gap-6 items-start mt-8"
    >
      <h1 className="text-lg sm:text-3xl capitalize font-serif tracking-wider text-center">
        Use <span className="netflixText font-bold">AI</span> to search for
        movies and series
      </h1>
      <div className="flex  w-full mt-2  rounded-md overflow-hidden shadow-sm shadow-gray-600  ">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="py-2 px-4 w-[90%]    bg-[#0F0F0F] text-white font-bold placeholder:font-medium tracking-wider outline-none border-[#0F0F0F] border-2 "
          placeholder="Eg: Horror and Romantic Movies"
          type="text"
        />
        <button
          onClick={searchGemini}
          className="w-[10%] netflixBG   flex items-center justify-center py-2   hover:bg-red-600 "
        >
          <IoIosSearch className="text-2xl hover:scale-105" />
        </button>
      </div>
    </form>
  )
}
export default AIForm
