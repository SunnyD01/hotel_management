import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Customerlogin from './User-login-page/Customerlogin';
import Employeelogin from './User-login-page/Employeelogin';
import CustomerPage from './Customer_page/CustomerPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import BookingHistory from './Customer_page/BookingHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/customerlogin",
    element: <Customerlogin/>,
  },
  {
    path: "/employeelogin",
    element: <Employeelogin/>,
  },
  {
    path: "/customerpage",
    element: <CustomerPage/>,
  },
  {
    path: "/bookingHistory",
    element: <BookingHistory/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
