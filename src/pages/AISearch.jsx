import AISuggestion from '../components/AISuggestion'
import AIForm from '../components/AIForm'
import {useState} from 'react'
import AIPageShimmer from '../components/Shimmer/AIPageShimmer'

const AISearch = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section className=" bg-neutral-900  flex justify-center flex-col items-center gap-3 min-h-[calc(100vh-166px)]  sm:min-h-[calc(100vh-90px)] ">
      <div className="absolute bg-neutral-900 w-full h-[70px] top-[-70px]"></div>
      <AIForm loadingState={setIsLoading} />
      {isLoading ? <AIPageShimmer /> : <AISuggestion />}
    </section>
  )
}
export default AISearch
