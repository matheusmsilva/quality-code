import './App.css'
import Cadastro from './pages/cadastro/cadastro';
import Login from './pages/login/login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/cadastro",
      element: <Cadastro/>,
    }
  ]);



  return (
    <RouterProvider router={router} />
  ) 
}

export default App
