

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pageis/home';
import Prodpage from './pageis/product';
import { Cartlist } from './pageis/cartlist';
import { CartProvider } from './context/Cartcontex';
import { LoginPage } from './pageis/login';
import { Reg } from './pageis/register';
import { Profiler } from 'react';
import { Profile } from './pageis/profile';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/prodlist",
      element: <Prodpage />
    },
    {
      path: "/cart",
      element: <Cartlist />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/Register",
      element: <Reg />
    },
    {
      path: "/profile",
      element: <Profile />
    }
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;