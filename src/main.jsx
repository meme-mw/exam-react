import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BookInfo from './components/BookInfo.jsx'
import BooksList from './components/BooksList.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
      path: "/bookinfo/:id",
      element: <BookInfo/>,
    },
    {
      path: "/bookslist/:id",
      element: <BooksList/>,
    },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
