import { Link } from "react-router-dom"

const Error = () => {
  return (
      <div className="w-full h-full flex justify-center items-center text-white">
        Lo sentimos, esta pagina no esta disponible,
        <Link to="/">Volver a iniciar sesión</Link>
      </div>
  )
}

export default Error