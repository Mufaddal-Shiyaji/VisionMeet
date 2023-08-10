  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './pages/App';
  import Room from './pages/Room';
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: `/:roomID`,
      element: <Room/>,
    }
  ]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

