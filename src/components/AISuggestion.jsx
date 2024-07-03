import {useSelector} from 'react-redux'
import InfiniteCard from './UI/InfiniteCard'

const AISuggestion = () => {
  const suggestedList = useSelector(
    (store) => store.geminiSlice.generatedResult
  )

  if (!suggestedList) {
    return <div className=""></div>
  }
  return (
    <section className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 w-[min(90vw,1800px)] m-auto mt-[50px] font-bold tracking-wider    ">
      {suggestedList.map((item) => {
        const value = item[0].name ?? item[0].title
        if (value.toLowerCase().includes('null')) {
          return (
            <div className="col-span-12" key={item[0].id}>
              <h1 className="text-center text-lg sm:text-2xl font-serif ">
                No result found! Please try different prompt
              </h1>
            </div>
          )
        } else {
          return <InfiniteCard key={item[0].id} data={item[0]} />
        }
      })}
    </section>
  )
}
export default AISuggestion