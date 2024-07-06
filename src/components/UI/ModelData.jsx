import convertMinutes from '../../utils/convertMin'
import SimilarList from './SimilarList'

const ModelData = ({type, data}) => {
  if (!data) {
    return <h1>Loading....</h1>
  }
  const date =
    data?.release_date?.slice(0, 4) ?? data?.first_air_date?.slice(0, 4)

  const length = data?.number_of_seasons ?? data?.runtime
  return (
    <>
      <section className="px-6 py-3 flex gap-2 justify-between  ">
        <article className=" sm:w-[50%] flex flex-col items-start ">
          <div className="text-gray-400 font-bold tracking-wider flex items-center gap-3">
            <p>{date}</p>
            {type === 'movie' ? (
              <p>{`${convertMinutes(length)}`}</p>
            ) : (
              <p>{`${length} seasons`}</p>
            )}
          </div>

          <div className=" font-bold tracking-wider flex items-center gap-3 mt-2 font-sm">
            <p className="border-2 py-1 px-2 border-gray-400">
              {data.adult ? '18+' : 'All'}
            </p>
            {/* Genres for small device */}
            <div className="flex sm:hidden  gap-1 flex-wrap text-sm   ">
              {data?.genres.map((genre, index) => (
                <p className="flex" key={genre.id}>
                  {genre.name}
                  {index < data.genres.length - 1 && <span>,</span>}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-2 tracking-wider text-justify text-sm font-light ">
            {data.overview}
          </p>
        </article>
        <article className=" hidden w-[50%] sm:flex flex-col items-end   tracking-wider">
          {/* produced */}
          <div className="flex  gap-1 flex-wrap items-end   w-[80%] text-sm ">
            <span className="text-gray-400 font-bold">
              {data.production_companies[0] && 'Produced By:'}
            </span>
            {data?.production_companies.map((company, index) => (
              <p className="flex" key={company.id}>
                {company.name}
                {index < data.production_companies.length - 1 && <span>,</span>}
              </p>
            ))}
          </div>
          {/* genres */}
          <div className="flex  gap-1 flex-wrap   w-[80%] mt-3 text-sm">
            <span className="text-gray-400 font-bold">
              {data.genres[0] && ' Genres:'}
            </span>
            {data?.genres.map((genre, index) => (
              <p className="flex" key={genre.id}>
                {genre.name}
                {index < data.genres.length - 1 && <span>,</span>}
              </p>
            ))}
          </div>
        </article>
      </section>
      <SimilarList type={type} />
    </>
  )
}
export default ModelData
