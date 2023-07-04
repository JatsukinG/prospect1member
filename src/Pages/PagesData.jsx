import { BiSolidBarChartAlt2 } from "react-icons/bi"
import Login from "./Login/index.jsx"
import { TbLogout2 } from "react-icons/tb"
import Dashboard from "./Dashboard/index.jsx"
import { IoRocketSharp } from "react-icons/io5"
import { FaUsers } from "react-icons/fa"
import { HiClipboardList } from "react-icons/hi"
import Prospects from "./Prospects/index.jsx"
import Athletes from "./Athletes/index.jsx"

const PagesData = [
  {
    path: "/",
    title: "Login",
    element: <Login />,
    icon: <TbLogout2 size="24px" />,
    auth: true
  },{
    path: "/dashboard",
    title: "Dashboard",
    element: <Dashboard />,
    icon: <BiSolidBarChartAlt2 size="24px" />
  },{
    path: "/my-prospects",
    title: "My Prospects",
    element: <Prospects />,
    icon: <IoRocketSharp size="24px" />
  },{
    path: "/athletes",
    title: "Athletes",
    element: <Athletes />,
    icon: <FaUsers size="24px" />
  },{
    path: "/evaluations",
    title: "Evaluations",
    element: <Dashboard />,
    icon: <HiClipboardList size="24px" />
  }
]

export default PagesData;