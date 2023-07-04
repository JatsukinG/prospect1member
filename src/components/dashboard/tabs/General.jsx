import PercentChart from "../../../components/ApexCharts/PercentChart.jsx"

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

const General = () => {
  return (
      <div className="w-full h-full rounded-2xl flex flex-col p-4 overflow-y-scroll">
        <h2 className="text-white font-bold text-xl text-left mb-4">Resumen General</h2>
        <div className="flex justify-center gap-24 mb-8">
          <PercentChart percent={60} title="General (ovr)" />
          <PercentChart percent={65} title="Fisicas (ovr)" />
          <PercentChart percent={72} title="Tecnicas (ovr)" />
          <PercentChart percent={53} title="Medicas (ovr)" />
        </div>
        <table className="w-full border-collapse bg-white/10 rounded-xl overflow-hidden">
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
                        <td key={task2} className="text-white text-center text-sm font-semibold py-2">{task2}</td>
                    ))
                  }
                </tr>
            ))
          }
        </table>
      </div>
  )
}

export default General