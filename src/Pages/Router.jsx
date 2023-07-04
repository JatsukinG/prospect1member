import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../Layouts/main"
import PagesData from "./PagesData.jsx"
import Login from "./Login/index.jsx"
import Error from "./Error/index.jsx"

const Router = () => {

  return (
      <BrowserRouter>
        <Routes>
          {PagesData.filter(row => !row.auth).map(row => (
              <Route key={row.title} path={`${row.path}`} element={<MainLayout>{row.element}</MainLayout>}/>
          ))}
          <Route path='/' element={<Login />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
  )
};

export default Router;