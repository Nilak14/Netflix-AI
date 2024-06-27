import Form from '../components/Form'
import {SIGN_UP_BG_IMAGE_URL} from '../utils/constant'

const LoginPage = () => {
  return (
    <main className=" h-[calc(100vh-70px)]  sm:h-auto  sm:pt-0  sm:flex sm:items-center sm:justify-center bg-black sm:bg-transparent ">
      <section className="sm:w-[450px] sm:p-10 sm:bg-black sm:bg-opacity-70 sm:rounded-md  sm:translate-y-[25%]">
        <Form />
      </section>
      <img
        className="fixed top-0 -z-[1] min-h-[100vh] object-cover hidden sm:block brightness-50 lg:h-auto w-full"
        src={SIGN_UP_BG_IMAGE_URL}
        alt="bg"
      />
    </main>
  )
}
export default LoginPage
