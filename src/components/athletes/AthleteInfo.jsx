import PercentChart from "../../components/ApexCharts/PercentChart.jsx"
import AreaChart from "../../components/ApexCharts/AreaChart.jsx"

const AthleteInfo = ({ athleteInfo }) => {

  return (
      <div className="w-full h-full flex flex-col overflow-y-scroll">
        <div className="w-full bg-gradient1 rounded-xl px-8 py-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <img
                  className="rounded-full ml-4"
                  src={athleteInfo.imgData}
                  alt="athlete-img"
                  width="120px"
                  height="120px"/>
              <div className="flex flex-col items-start ml-4 gap-2">
                <h2 className="font-bold text-2xl">{athleteInfo.name}</h2>
                <p>{athleteInfo.position}</p>
                <p>{athleteInfo.age} años</p>
              </div>
            </div>
            <div className="flex flex-col text-right font-bold gap-4 text-sm">
              <p>Peso: {10}kg</p>
              <p>Talla: {1.7}m</p>
              <p>IMC: {12}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center flex-wrap gap-8 mt-4">
          {
            Object.keys(athleteInfo.evaluations).map(task => (
                <PercentChart key={task} percent={athleteInfo.evaluations[task]} title={`${task} (ovr)`}/>
            ))
          }
        </div>
        <div className="w-full bg-yellow-100/10 rounded-xl mt-8">
          <AreaChart />
        </div>
        <div className="w-full p-8"></div>
      </div>
  )
}

export default AthleteInfo