import { IoCloseCircle } from "react-icons/io5"
import { TbLogout2 } from "react-icons/tb"
import PagesData from "../../Pages/PagesData.jsx"
import { Link } from "react-router-dom"
import clubLogo from "/club-logo.png"

const Sidebar = ({ isOpen, setIsOpen, sidebarItemActive, setSidebarItemActive }) => {

  return (
      <div className={`absolute top-0 left-0 w-full h-full bg-black z-[1000000] flex flex-col ${!isOpen && 'hidden'}`}>
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center">
            <span className="p-4 text-white" onClick={() => setIsOpen(false)}>
              <IoCloseCircle size="30px"/>
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src={clubLogo} alt="club-logo" className="w-48"/>
            <p className="text-white text-sm text-center font-bold mt-2">
              Academia real madrid
            </p>
          </div>
          {
            PagesData.map((task) => {
                  if (!task.auth) {
                    return (
                        <Link key={task.title} to={task.path} onClick={() => setIsOpen(false)}>
                          <div
                              onClick={() => setSidebarItemActive(task.title)}
                              className={`sidebar-item ${sidebarItemActive === task.title && 'sidebar-item-active'}`}>
                            {task.icon}
                            <p className="font-bold text-sm">{task.title}</p>
                          </div>
                        </Link>
                    )
                  }
                }
            )
          }
        </div>
        <Link to="/">
          <div className="flex items-center p-4 gap-4 text-white hover:text-yellow-100 hover:cursor-pointer">
            <TbLogout2 size="24px"/>
            <p className="font-bold text-sm">Cerrra sesión</p>
          </div>
        </Link>
      </div>
  )
}

export default Sidebar