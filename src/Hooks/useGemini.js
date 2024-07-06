import {useDispatch} from 'react-redux'
import run from '../Gemini/gemini'
import {addGeneratedResult} from '../Redux/Slices/geminiSlice'

const useGemini = (userSearchText) => {
  const dispatch = useDispatch()
  const prompt = `act as a movie recommendation system and suggest only 5 movie for the prompt: ${userSearchText}. Give answer in comma separated values as given example. example: ironman, Thor, Captain America remember to provide result in given example just provide movie names like in example. If the prompt is not related to movies and series just say 'null'.`

  const result = run(prompt)
  dispatch(addGeneratedResult(result))
}
export default useGemini
