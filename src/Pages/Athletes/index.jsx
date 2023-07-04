import { useState } from "react"
import { IoMdArrowRoundBack } from "react-icons/io"
import AthleteInfo from "../../components/athletes/AthleteInfo.jsx"

const athletes = [
  {
    sessionID: 'aaaa',
    name: "Julian Andres Trujillo Molina",
    age: 22,
    ovr: 90,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    position: 'Delantero ofensivo',
    evaluations: {
      fisical: 70,
      tecnic: 65
    }
  }, {
    sessionID: 'bbbb',
    name: "Sebastian Arias",
    age: 23,
    ovr: 80,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    position: 'Portero',
    evaluations: {
      fisical: 79,
      tecnic: 65
    }
  }, {
    sessionID: 'cccc',
    name: "Bayron Bermudez",
    age: 25,
    ovr: 70,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    position: 'Mediocampista defensivo',
    evaluations: {
      fisical: 90,
      tecnic: 87
    }
  }, {
    sessionID: 'ddd',
    name: "Andres arboleda",
    age: 22,
    ovr: 75,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    position: 'Mediocampista ofensivo',
    evaluations: {
      fisical: 75,
      tecnic: 99
    }
  },
]

const Athletes = () => {
  const [athleteInfo, setAthleteInfo] = useState({})

  return (
      <div className="w-full h-full text-white text-center">
        {
          athleteInfo.hasOwnProperty('sessionID') ? (
              <div className="w-full h-full flex flex-col gap-4 p-4">
                <button className="w-min bg-white/20 flex items-center gap-2 px-4 py-2 text-sm rounded-full" onClick={() => setAthleteInfo({})}>
                  <IoMdArrowRoundBack size="20px" />
                  Regresar
                </button>
                <AthleteInfo athleteInfo={athleteInfo} />
              </div>
          ) : (
              <div className="w-full flex justify-center flex-wrap p-8 gap-8">
                {
                  athletes.map(task => (
                      <div key={task.sessionID} className="athlete-card" onClick={()=>setAthleteInfo(task)}>
                        <img src={task.imgData} alt="athlete-img"/>
                        <p className="p-2 font-bold text-sm">{task.name}</p>
                        <p className="font-normal text-xs text-gray-300">{task.position}</p>
                      </div>
                  ))
                }
              </div>
          )
        }
      </div>
  )
}

export default Athletes