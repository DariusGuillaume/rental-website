
import HomePage from './pages/homepage/homepage'
import ListPage from './pages/listpage/listpage'
import SinglePage from './pages/singlepage/singlepage'

import {
  createBrowserRouter , RouterProvider} from "react-router-dom";
  import Layout from "./pages/layout/layout";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Layout />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/:id", element: <SinglePage /> }, 


    ]
  
  }


   
  ]);
  return (
   


<RouterProvider router = {router}/> 
  )
}

export default App