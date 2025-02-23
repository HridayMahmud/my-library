import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './Components/Root.jsx'
import Error from './Components/Error/Error.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import Home from './Components/BannerandDisplayedBook/Home.jsx'
import DisplayListedBooks from './Components/Displaybooks/Displaybooks.jsx'
import Listedbooks from './Components/ListedBooks/Listedbooks.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/listedbooks',
        element:<Listedbooks></Listedbooks>
       },
    
      {
        path:'/listedbooks',
        element:<DisplayListedBooks></DisplayListedBooks>
      },
      
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/book/:id',
        loader:()=>fetch('/Data.json'),
        element:<BookDetails></BookDetails>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
