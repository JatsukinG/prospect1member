import { useState } from "react"
import { RiGitBranchFill } from "react-icons/ri"
import ProfileInfo from "../../components/ProfileInfo.jsx"
import Sidebar from "../../components/sidebar/index.jsx"
import { IoMenu } from "react-icons/io5"
import MobileSidebar from "../../components/sidebar/MobileSidebar"

const MainLayout = ({ children }) => {
  const [openProfile, setOpenProfile] = useState(false)
  const [sidebarItemActive, setSidebarItemActive] = useState('Dashboard')
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
      <div className="w-full h-full flex overflow-scroll">
        {/*Sidebar*/}
        <div className="hidden md:block">
          <Sidebar sidebarItemActive={sidebarItemActive} setSidebarItemActive={setSidebarItemActive}/>
        </div>
        <div className="block md:hidden">
          <MobileSidebar
              isOpen={openSidebar}
              setIsOpen={setOpenSidebar}
              sidebarItemActive={sidebarItemActive}
              setSidebarItemActive={setSidebarItemActive}/>
        </div>
        <div className="w-full h-full flex flex-col">
          {/*Header*/}
          <div className="w-full h-12 bg-[#00ecac] text-black flex justify-between items-center">
            <div className="flex items-center h-full md:px-4">
              <span className="flex items-center px-4 md:hidden h-full" onClick={() => setOpenSidebar(true)}>
                <IoMenu size="24px"/>
              </span>
              <h1 className="font-bold text-xl">{sidebarItemActive}</h1>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-1">
                <RiGitBranchFill size="20px"/>
                <p className="font-bold text-xs">Mayor</p>
              </div>
              <div className="relative w-8 h-8 bg-gray-900 rounded-full" onClick={() => setOpenProfile(!openProfile)}>
                {
                    openProfile && (
                        <ProfileInfo/>
                    )
                }
              </div>
            </div>
          </div>
          {/*Content*/}
          <div className="w-full h-full overflow-y-scroll flex flex-col">
            {children}
          </div>
        </div>
      </div>
  )
}

export default MainLayout