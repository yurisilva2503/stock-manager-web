import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './routes/Principal.jsx';
import About from './routes/Sobre.jsx';
import Tables from './routes/Tabelas.jsx';
import Login_page from './login.jsx';
import Cadastro_Usuario from './routes/Cadastro_Usuario.jsx';


import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Login_page />
  },

  {
    path: "/",
    element: <App />,
    children:[
      {path: "/home", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/tables", element: <Tables />},
      {path: "/cadastro_usuario", element: <Cadastro_Usuario />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
