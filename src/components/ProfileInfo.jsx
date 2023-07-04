import { TbLogout2 } from "react-icons/tb"
import ClubLogo from "/club-logo.png"

const ProfileInfo = () => {
  return (
      <div className="profile-info">
        <img src={ClubLogo} alt="club-logo" width="250px"/>
        <p className="text-xl font-bold mt-4">Comite olimpico de panama</p>
        <div className="w-full mt-4 flex justify-between">
          <p className="text-sm">Reserva deportivo</p>
          <p className="text-sm">Talento deportivo</p>
        </div>
        <div className="flex gap-2 mt-4 hover:cursor-pointer hover:text-gray-700">
          <TbLogout2 size="24px"/>
          <p>Cerrar sesión</p>
        </div>
      </div>
  )
}

export default ProfileInfo