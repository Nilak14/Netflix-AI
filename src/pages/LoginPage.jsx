import Form from '../components/Form'

const LoginPage = () => {
  return (
    <main className="sm:flex sm:items-center sm:justify-center">
      <img
        className="fixed top-0 -z-[1] min-h-[100vh] object-cover hidden sm:block brightness-50 lg:h-auto w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/04dc244c-b014-4f98-ac24-cf31c955574e/NP-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"
      />
      <section className="sm:w-[450px] sm:p-10 sm:bg-black sm:bg-opacity-70 sm:rounded-md">
        <Form />
      </section>
      {/* <div className="bg-black sm:bg-inherit w-full   overflow-hidden  sm:flex sm:items-center sm:justify-center">
        <img
          className="min-h-[100vh] object-cover fixed top-0 -z-10 hidden sm:block brightness-50  lg:h-auto w-full  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/04dc244c-b014-4f98-ac24-cf31c955574e/NP-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImage"
        />
        <section className="sm:w-[450px] sm:p-10 sm:bg-black sm:bg-opacity-70 sm:rounded-md">
          <Form />
        </section>
      </div> */}
    </main>
  )
}
export default LoginPage
