import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/client/Home';
import RootLayout from './layouts/client/root/RootLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      // Add more routes here as needed
    ]
  },
]);

