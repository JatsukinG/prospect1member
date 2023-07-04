import { useEffect, useState } from "react"
// import "./styles.css"

const IMG = "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"

const DragAndDrop = ({ data }) => {
  const [athletes, setAthletes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredAthletes, setFilteredAthletes] = useState([]);

  useEffect(() => {
    setAthletes(data)
  }, [data])

  const getList = (show_in_mercato) => {
    if (filteredAthletes.length > 0) {
      return filteredAthletes.filter(item => item.show_in_mercato === show_in_mercato)
    } else {
      return athletes.filter(item => item.show_in_mercato === show_in_mercato)
    }
  }

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.sessionID)
  }

  const draggingOver = (evt) => {
    evt.preventDefault();
  }

  const onDrop = (evt, show_in_mercato) => {
    const itemID = evt.dataTransfer.getData('itemID');
    const item = athletes.find(item => item.sessionID === itemID);

    if(item.show_in_mercato !== show_in_mercato){
      item.show_in_mercato = show_in_mercato;

      const newState = athletes.map(task => {
        if (task.sessionID === itemID) return item;
        return task
      })

      setAthletes(newState);
    }
  }

  const onChangeSearchAthlete = (e) => {

    setFilteredAthletes(() => {
      return athletes.filter(athlete => (athlete.nombre).toLowerCase().includes((e.target.value).toLowerCase()))
    })

    setSearchValue(e.target.value)
  }

  return (
      <div className="w-full h-full">
        <div className="w-full flex justify-between items-center py-4 mb-4">
          <div className="font-bold">
            Administrar Atletas para Mercato <br/>
            <p className="text-xs font-normal">
              (Arrastra y suelta para actualizar el estado del atleta en mercato)
            </p>
          </div>
          <div className="">
            <input
                type="search"
                className="w-64 px-4 py-2 text-sm outline-none rounded-full bg-white/20"
                placeholder="Buscar un atleta..."
                value={searchValue}
                onChange={onChangeSearchAthlete}/>
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='w-1/2 h-96 rounded-xl overflow-hidden bg-white/10'>
            <h3 className="sticky top-0 left-0 w-full bg-white/10 p-4">
              Atletas en progreso<br/>
              <p>
                (Atletas que aún no estan listos para ser publicados)
              </p>
            </h3>
            <div className='flex flex-col gap-4 h-full px-4 py-4 overflow-y-scroll' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 0))}>
              {
                searchValue && filteredAthletes.length === 0 ? (
                        <p>No se encontraron atletas</p>
                    ) :
                    getList(0).map(item => (
                        <div className='flex justify-between items-center bg-white/20 rounded-full px-4 py-2' key={item.sessionID} draggable onDragStart={(evt) => startDrag(evt, item)}>
                          <div className="flex items-center gap-2">
                            <img src={item.imgData || IMG} alt="img" className="w-8 h-8 rounded-full" />
                            <p className=''>{item.nombre}</p>
                          </div>
                          <span className=''>{item.edad} años</span>
                        </div>
                    ))
              }
            </div>
          </div>

          <div className='w-1/2 h-96 rounded-xl overflow-hidden bg-white/10'>
            <h3 className="sticky top-0 left-0 w-full bg-white/10 px-2 py-4">
              Atletas listos<br/>
              <p>
                (Atletas que estan publicados en mercato)
              </p>
            </h3>
            <div className='flex flex-col gap-4 h-full px-4 py-4 overflow-y-scroll' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
              {
                searchValue && filteredAthletes.length === 0 ? (
                        <p>No se encontraron atletas</p>
                    ) :
                    getList(1).map(item => (
                        <div className='flex justify-between items-center bg-white/20 rounded-full px-4 py-2' key={item.sessionID} draggable onDragStart={(evt) => startDrag(evt, item)}>
                          <div className="flex items-center gap-2">
                            <img src={item.imgData || IMG} alt="img" className="w-8 h-8 rounded-full" />
                            <p className=''>{item.nombre}</p>
                          </div>
                          <span className=''>{item.edad} años</span>
                        </div>
                    ))
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default DragAndDrop;
