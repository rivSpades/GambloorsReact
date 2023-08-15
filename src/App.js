import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/context/auth-context';
import { WalletContextProvider } from './store/context/wallet-context';
import Root, { tokenLoader } from './pages/Root';

import Home from './pages/Home';
import Dice from './pages/Dice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />,
        id: 'home',
      },
      {
        path: 'dice',
        element: <Dice />,
        id: 'dice',
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <WalletContextProvider>
        <RouterProvider router={router} />;
      </WalletContextProvider>
    </AuthContextProvider>
  );
}

export default App;
