const SearchForm = ({state, setState}) => {
  return (
    <form>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="py-4 px-4 w-full   bg-[#0F0F0F] text-white font-bold placeholder:font-medium tracking-wider outline-none rounded-md focus:border-2"
        type="text"
        placeholder="Search movies and series"
      />
    </form>
  )
}
export default SearchForm
