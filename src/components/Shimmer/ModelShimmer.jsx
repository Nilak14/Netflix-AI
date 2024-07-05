const ModelShimmer = ({close}) => {
  return (
    <section className="bg-neutral-900 absolute w-[min(100vw,800px)] h-[100vh] overflow-y-auto rounded-lg no-scrollbar shadow-lg shadow-black pb-[170px] sm:pb-[100px]">
      <div className=" h-[70vh] w-full rounded-md m-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
      <button
        onClick={() => close()}
        className="absolute top-[15px] right-[15px] text-white text-xl font-medium bg-neutral-900 rounded-full flex items-center justify-center w-[40px] h-[40px] hover:scale-110"
      >
        X
      </button>
    </section>
  )
}

export default ModelShimmer
