import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Homepage from "./Components/Homepage"

import EditProduct from './Components/EditProduct';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Homepage />} />
      <Route path='/editproduct/:id' element={<EditProduct />} />






    </Route>
  )
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

