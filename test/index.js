import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'; // Adjust path if necessary
import App from './App'; // Your main App component
import Home from './pages/Home/home'
import Prescription from './pages/Prescription/prescription';
import Mail from './pages/Mail/mail';
import Calendar from './pages/Calendar/calendar';
import Chat from './pages/Chat/chat'
import Search from './pages/Search/search';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home/>
      </>
    ),
  },
  {
    path: "/calendar",
    element: (
      <>
        <Navbar />
        <Calendar/>
      </>
    ),
  },
  {
    path: "/prescriptions",
    element: (
      <>
        <Navbar />
        <Prescription/>
      </>
    ),
  },
  {
    path: "/mail",
    element: (
      <>
        <Navbar />
        <Mail/>
      </>
    ),
  },
  {
    path: "/chat",
    element: (
      <>
        <Navbar />
        <Chat/>
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Navbar />
        <Search/>
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
