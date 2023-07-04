import { useState } from "react"
import General from "../../components/dashboard/tabs/General.jsx"
import Fisicas from "../../components/dashboard/tabs/Fisicas.jsx"

const tabs = [
  {
    id: 1,
    label: 'General'
  },
  {
    id: 2,
    label: 'Fisicas'
  },
  {
    id: 3,
    label: 'Tecnicas'
  },
  {
    id: 4,
    label: 'Aspectos complementarios'
  },
]

const Dashboard = () => {
  const [tabActive, setTabActive] = useState(1)

  return (
      <div className="w-full h-full flex flex-col p-4 gap-4">
        <div className="w-min flex rounded-full bg-white/20 font-bold text-sm text-white overflow-hidden">
          {
            tabs.map(task=>(
                <div
                    key={task.id}
                    onClick={()=>setTabActive(task.id)}
                    className={`w-max py-2 px-10 ${tabActive === task.id && 'bg-white/20'} hover:bg-white/10 hover:cursor-pointer`}>
                  {task.label}
                </div>
            ))
          }
        </div>
        {
          tabActive === 1 ? (
              <General />
          ) : tabActive === 2 && (
              <Fisicas />
          )
        }
      </div>
  )
}

export default Dashboard