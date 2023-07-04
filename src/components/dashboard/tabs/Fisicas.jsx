import AreaChart from "../../../components/ApexCharts/AreaChart.jsx"

const headerTable = ['Atleta', 'Fisica', 'Tecnica', 'Psicologia', 'Antropometria', 'Medica', 'Fisiologica',
  'Psicosocial', 'Ovr general']

const data = [
  {
    atleta: 'Julian Andres Trujillo Molina',
    fisica: 12,
    tecnica: 14,
    psicologia: 12,
    antropometria: 12,
    medica: 43,
    fisiologica: 65,
    psicosocial: 2,
    general: 23
  },
  {
    atleta: 'Julian',
    fisica: 12,
    tecnica: 14,
    psicologia: 12,
    antropometria: 12,
    medica: 43,
    fisiologica: 65,
    psicosocial: 2,
    general: 23
  },
  {
    atleta: 'Julian',
    fisica: 12,
    tecnica: 14,
    psicologia: 12,
    antropometria: 12,
    medica: 43,
    fisiologica: 65,
    psicosocial: 2,
    general: 23
  },
  {
    atleta: 'Julian',
    fisica: 12,
    tecnica: 14,
    psicologia: 12,
    antropometria: 12,
    medica: 43,
    fisiologica: 65,
    psicosocial: 2,
    general: 23
  },
  {
    atleta: 'Julian',
    fisica: 12,
    tecnica: 14,
    psicologia: 12,
    antropometria: 12,
    medica: 43,
    fisiologica: 65,
    psicosocial: 2,
    general: 23
  },
  {
    atleta: 'Julian',
    fisica: 12,
    tecnica: 14,
    psicologia: 12,
    antropometria: 12,
    medica: 43,
    fisiologica: 65,
    psicosocial: 2,
    general: 23
  }
]

const Fisicas = () => {

  return (
      <div className="w-full h-5/6 overflow-y-scroll rounded-2xl flex flex-col p-4 gap-8">
        <h2 className="text-white font-bold text-xl text-left">
          Evaluaciones fisicas
        </h2>
        <div className="w-full bg-white/10 rounded-xl">
          <AreaChart />
        </div>
        <h2 className="text-white font-bold text-xl text-left">
          Reporte de evaluaciones fisicas
        </h2>
        <table className="w-full border-collapse bg-white/10 rounded-xl overflow-hidden text-center text-center">
          <tr className="bg-white/10">
            {
              headerTable.map(task => (
                  <th key={task} className="text-white font-bold py-2">{task}</th>
              ))
            }
          </tr>
          {
            data.map(task => (
                <tr key={task}>
                  {
                    Object.values(task).map(task2 => (
                        <td key={task2} className="text-white text-sm font-semibold py-2">{task2}</td>
                    ))
                  }
                </tr>
            ))
          }
        </table>
        <h2 className="text-white font-bold text-xl text-left">
          Composición corporal
        </h2>
        <table className="w-full border-collapse bg-white/10 rounded-xl overflow-hidden text-center">
          <tr className="bg-white/10">
            {
              headerTable.map(task => (
                  <th key={task} className="text-white font-bold py-2">{task}</th>
              ))
            }
          </tr>
          {
            data.map(task => (
                <tr key={task}>
                  {
                    Object.values(task).map(task2 => (
                        <td key={task2} className="text-white text-sm font-semibold py-2">{task2}</td>
                    ))
                  }
                </tr>
            ))
          }
        </table>
        <h2 className="text-white font-bold text-xl text-left">
          Manejo de carga
        </h2>
        <table className="w-full border-collapse bg-white/10 rounded-xl overflow-hidden text-center">
          <tr className="bg-white/10">
            {
              headerTable.map(task => (
                  <th key={task} className="text-white font-bold py-2">{task}</th>
              ))
            }
          </tr>
          {
            data.map(task => (
                <tr key={task}>
                  {
                    Object.values(task).map(task2 => (
                        <td key={task2} className="text-white text-sm font-semibold py-2">{task2}</td>
                    ))
                  }
                </tr>
            ))
          }
        </table>
      </div>
  )
}

export default Fisicas