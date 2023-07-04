import DragAndDrop from "../../components/DragAndDrop/index.jsx"

const athletes = [
  {
    sessionID: "aaaa",
    nombre: "Julian Trujillo",
    edad: 22,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    show_in_mercato: 0
  },{
    sessionID: "bbbb",
    nombre: "Bayron Bermudez",
    edad: 25,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    show_in_mercato: 0
  },{
    sessionID: "cccc",
    nombre: "Sebastian Arias",
    edad: 23,
    imgData: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    show_in_mercato: 0
  }
]

const Prospects = () => {
  return (
      <div className="w-full h-full flex flex-col p-4 gap-4 text-white">
        <DragAndDrop data={athletes} />
      </div>
  )
}

export default Prospects;

