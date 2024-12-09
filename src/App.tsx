
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pageis/home';
import Prodpage from './pageis/product';
import { Cartlist } from './pageis/cartlist';
import React, { createContext, useState } from 'react';
import item from './componens/aru';
import { CartContextType } from './componens/cartin';
export const context = createContext<CartContextType>({
  cart: [],
  setCart: ()=>{}
})
function App() {
  const [cart, setCart] = useState<item[]>([])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/prodlist",
      element: <Prodpage></Prodpage>
    },
    {
      path: "/cart",
      element: <Cartlist></Cartlist>
    }

  ]);
  return <>
    <context.Provider value={{ cart, setCart }}>
      <RouterProvider router={router}></RouterProvider>
    </context.Provider>


  </>


}

export default App
