import {useState} from 'react'
import {IoIosSearch} from 'react-icons/io'
const AISearch = () => {
  const [searchText, setSearchText] = useState('')
  return (
    <section className=" h-screen -mt-[200px] sm:-mt-[90px] pt-[80px] flex justify-center  ">
      <form className="pt-[150px] flex flex-col gap-6 items-start">
        <h1 className="text-lg sm:text-3xl capitalize font-serif tracking-wider">
          Use <span className="netflixText font-bold">AI</span> to search for
          movies and series
        </h1>
        <div className="flex  w-full mt-2  rounded-md overflow-hidden  ">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="py-2 px-4 w-[90%]    bg-[#0F0F0F] text-white font-bold placeholder:font-medium tracking-wider outline-none border-[#0F0F0F] border-2  "
            placeholder="Eg: Horror Romantic Movies"
            type="text"
          />
          <button className="w-[10%] netflixBG   flex items-center justify-center py-2   hover:bg-red-600 ">
            <IoIosSearch className="text-2xl hover:scale-105" />
          </button>
        </div>
      </form>
    </section>
  )
}
export default AISearch
