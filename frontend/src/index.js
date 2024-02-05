import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Error from './pages/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Doubt from './pages/Doubt';
import Doubts from './pages/Doubts';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <LogIn />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement: <Error />,
      },
      {
        path: "/doubts",
        element: <Doubts />,
        errorElement: <Error />,
      },
      {
        path: "/doubts/:id",
        element: <Doubt />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
