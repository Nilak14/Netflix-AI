import {useState, useRef} from 'react'
import Movies from './UI/Movies'
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'
const MovieList = ({title, movies, type}) => {
  const [isCardHover, setIsCardHover] = useState(false)
  const [isCardSlide, setIsCardSlide] = useState(false)
  const containerRef = useRef()

  const [activeModelIndex, setActiveModelIndex] = useState(null)
  const closeModel = (index) => {
    setActiveModelIndex((prev) => prev === index && null)
  }
  const openModel = (index) => {
    setActiveModelIndex(index)
  }
  if (!movies) return

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const {scrollLeft, clientWidth} = containerRef.current
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth
      const newScrollLeft = scrollLeft + scrollAmount

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })

      if (newScrollLeft <= 0) {
        setIsCardSlide(false)
      } else {
        setIsCardSlide(true)
      }
    }
  }

  return (
    <article className="overflow-x-hidden   ">
      <h1 className="capitalize font-bold tracking-wider text-xl my-4">
        {title}
      </h1>
      <div
        onMouseEnter={() => setIsCardHover(true)}
        onMouseLeave={() => setIsCardHover(false)}
        className="flex gap-4  items-center relative "
      >
        {isCardSlide && (
          <button
            onClick={() => scrollContainer('left')}
            className={`absolute left-0 w-14 flex items-center justify-center bg-neutral-800 bg-opacity-50 h-full text-2xl hover:text-4xl transition-all ease-in-out duration-200 `}
          >
            <div className={`${isCardHover ? 'block' : 'hidden'} `}>
              <FaChevronLeft />
            </div>
          </button>
        )}

        <button
          onClick={() => scrollContainer('right')}
          className={`absolute right-0 w-14 flex items-center justify-center bg-neutral-800 bg-opacity-50 h-full text-2xl hover:text-4xl transition-all ease-in-out duration-200 `}
        >
          <div className={`${isCardHover ? 'block' : 'hidden'} `}>
            <FaChevronRight />
          </div>
        </button>
        <div
          className="flex gap-4 overflow-x-auto no-scrollbar"
          ref={containerRef}
        >
          {movies.map((movie, index) => (
            <Movies
              key={movie.id}
              isActive={activeModelIndex === index}
              open={() => openModel(index)}
              close={() => closeModel(index)}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
export default MovieList
