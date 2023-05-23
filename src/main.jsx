import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Providers/AuthProvider';
import Chefslayout from './Components/ChefsLayout/Chefslayout';
// import Chefs from './Components/Chefs/Chefs';
import Home from './Components/Home/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Recipes from './Components/Recipes/Recipes';
import PrivateRoutes from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import PDFDownload from './Components/Blog/Blog';
import Blog2 from './Components/Blog/Blog2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'chefs/:id',
        element: <PrivateRoutes><Chefslayout></Chefslayout></PrivateRoutes>,
        loader: async ({ params }) => { return fetch(`https://10th-assignment-server-side-zubair650.vercel.app/chefs/${params.id}`) },
        children: [
          {
            path: '',
            element: <Recipes></Recipes>,
            loader: async ({ params }) => { return fetch(`https://10th-assignment-server-side-zubair650.vercel.app/recipes/${params.id}`) }
          },
        ]
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
