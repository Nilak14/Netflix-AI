import {useSelector} from 'react-redux'
import InfiniteCard from './UI/InfiniteCard'
import {useState} from 'react'

const AISuggestion = () => {
  const suggestedList = useSelector(
    (store) => store.geminiSlice.generatedResult
  )

  const [activeModelIndex, setActiveModelIndex] = useState(null)
  const closeModel = (index) => {
    setActiveModelIndex((prev) => prev === index && null)
  }
  const openModel = (index) => {
    setActiveModelIndex(index)
  }

  if (!suggestedList) {
    return <div className=""></div>
  }
  return (
    <section className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 w-[min(90vw,1800px)] m-auto mt-[50px] font-bold tracking-wider    ">
      {suggestedList.map((item, index) => {
        const value = item[0].name ?? item[0].title
        const type =
          item[0].media_type === 'movie' ? item[0].media_type : 'series'
        if (value.toLowerCase().includes('null')) {
          return (
            <div className="col-span-12" key={item[0].id}>
              <h1 className="text-center text-lg sm:text-2xl font-serif ">
                No result found! Please try different prompt
              </h1>
            </div>
          )
        } else {
          return (
            <InfiniteCard
              isActive={activeModelIndex === index}
              open={() => openModel(index)}
              close={() => closeModel(index)}
              key={item[0].id}
              data={item[0]}
              type={type}
            />
          )
        }
      })}
    </section>
  )
}
export default AISuggestion
