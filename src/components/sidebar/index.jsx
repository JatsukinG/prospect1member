import { useState } from "react"
import { RiMenuFoldFill } from "react-icons/ri"
import { IoMenu } from "react-icons/io5"
import { TbLogout2 } from "react-icons/tb"
import PagesData from "../../Pages/PagesData.jsx"
import { Link } from "react-router-dom"
import clubLogo from "/club-logo.png"

const Sidebar = ({sidebarItemActive, setSidebarItemActive}) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
      <div className={`sidebar ${!isOpen && 'sidebar-close'}`}>
        <div className="w-full flex flex-col">
          <div
              className="w-full h-12 flex justify-between bg-black/20 items-center p-4 text-white"
              onClick={() => setIsOpen(!isOpen)}>
            <p className="font-bold">PROSPECT 1</p>
            {
              isOpen ? (
                  <RiMenuFoldFill size="24px"/>
              ) : (
                  <IoMenu size="24px"/>
              )
            }
          </div>
          {
              isOpen && (
                  <div className="flex flex-col items-center p-4">
                    <img src={clubLogo} alt="club-logo" className="w-48" />
                    <p className="text-white text-sm text-center font-bold mt-2">
                      Academia real madrid
                    </p>
                  </div>
              )
          }
          {
            PagesData.map((task) => {
                  if (!task.auth) {
                    return (
                        <Link key={task.title} to={task.path}>
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