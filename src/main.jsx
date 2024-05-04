import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './Components/Error/Error.jsx'
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import './index.css'
import Home from './Components/Home/Home.jsx';
import Registration from './Components/Registration/Registration.jsx'
import StudentRegistration from './Components/Registration/StudentRegistration.jsx';
import StudentInfo from './Components/Registration/StudentInfo.jsx';
import DeveloperProfile from './Components/Developer/Developer.jsx'
import { Provider } from 'react-redux';
import { store } from './Components/Store/Store.js'
import Batch from './Components/Batches/Batch.jsx'
import Admin from './Components/Admin/Admin.jsx'
import Verification from './Components/Signup/Verification.jsx'
import {Toaster} from 'react-hot-toast';
import BatchInfo from './Components/Batches/BatchInfo.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        children:[
          {path:'/home',
          element:<Home />}
        ]
      },
      {
        path:'/developer',
        element:<DeveloperProfile/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/verification',
        element:<Verification/>
      },
      {
        path:'/registration',
        element:<Registration/>
      },
      {
        path:'/student_reg',
        element:<StudentRegistration/>
      },
      {
        path:'/student_info',
        element:<StudentInfo/>
      },
      {
        path:'/batches',
        element:<Batch/>
      },
      {
        path:'/batchInfo',
        element:<BatchInfo/>
      },
      {
        path:'/admin_panel',
        element:<Admin/>
      },
    ]
  },
  {
    path:'*',
    element:<Error/>
  }
])
// #98B880
document.getElementById('root').style.backgroundColor = '#88ccee'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
    </Provider>
  </React.StrictMode>,
)
