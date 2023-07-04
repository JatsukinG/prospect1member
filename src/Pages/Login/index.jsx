import { BsCheckCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Login = () => {

  return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-96 px-8 py-12 bg-white/10 relative flex flex-col rounded-2xl">
          <h2 className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#00ecac] font-bold text-2xl px-4 py-2 rounded-xl">
            Prospect 1
          </h2>
          <input
              type="text"
              className="w-full outline-none py-2 px-6 bg-white/10 text-white rounded-full mt-8"
              placeholder="Email"/>
          <input
              type="text"
              className="w-full outline-none py-2 px-6 bg-white/10 text-white rounded-full mt-4"
              placeholder="Password"/>
          <div className="flex items-center gap-2 mt-6">
            <BsCheckCircleFill size="15px" color="white"/>
            <label className="text-white" htmlFor="remember-me">Recordarme</label>
          </div>
          <Link to="/dashboard">
            <button className="w-full py-2 bg-[#00ecac] font-bold rounded-full mt-4 hover:scale-105 duration-200 active:scale-100">
              Ingresar
            </button>
          </Link>
          <p className="text-white text-sm mt-4">
            Has olvidado tu <a className="text-[#00ecac]" href="">contraseña?</a>
          </p>
        </div>
      </div>
  )
}

export default Login