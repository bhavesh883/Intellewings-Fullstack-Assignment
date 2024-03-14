import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/SignIn';
import App from './components/App';
import CreateAccount from './components/CreateAccount';
import EditContact from './components/Edit';

const routes = [
  {
    path: '/', 
    element: <SignIn/>
  },
  {
    path:'home',
    element:<App/>
  },
  {
    path:"/signup",
    element:<CreateAccount/>
  }
];

const BrowserRouter = createBrowserRouter( routes );

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} >
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
