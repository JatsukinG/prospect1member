import { useEffect, useState } from "react"
import { RiGitBranchFill } from "react-icons/ri"
import ProfileInfo from "../../components/ProfileInfo.jsx"
import Sidebar from "../../components/sidebar/index.jsx"

const MainLayout = ({ children }) => {
  const [openProfile, setOpenProfile] = useState(false)
  const [sidebarItemActive, setSidebarItemActive] = useState('Dashboard')

  return (
      <div className="w-full h-full flex overflow-hidden">
        {/*Sidebar*/}
        <Sidebar sidebarItemActive={sidebarItemActive} setSidebarItemActive={setSidebarItemActive} />
        <div className="w-full h-full">
          {/*Header*/}
          <div className="w-full h-12 bg-[#00ecac] text-black flex justify-between items-center px-4">
            <h1 className="font-bold text-xl">{sidebarItemActive}</h1>
            <div className="flex items-center gap-8">
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