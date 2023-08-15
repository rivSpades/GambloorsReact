import React, { useEffect, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import TopNavigation from '../components/Navigation/TopNavigation';
import BottomNavigation from '../components/Navigation/BottomNavigation';
import MainLayout from '../components/UI/MainLayout';
import Footer from '../components/Footer/Footer';
import AuthModals from '../components/Modals/AuthModals';
import { ModalContextProvider } from '../store/context/modalState-context';

import AuthContext from '../store/context/auth-context';
function Root() {
  const token = useLoaderData();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      authCtx.onLogout();

      return;
    }

    const now = new Date();
    const storedExpirationDate = new Date(localStorage.getItem('expiration'));
    const tokenDuration = storedExpirationDate.getTime() - now.getTime();
    authCtx.setIsLoggedIn(true);
    setTimeout(() => {
      authCtx.onLogout();
    }, tokenDuration);
    // eslint-disable-next-line
  }, [token]);
  return (
    <React.Fragment>
      <ModalContextProvider>
        <MainLayout>
          <TopNavigation />
          <BottomNavigation />

          <Outlet />

          <Footer />
        </MainLayout>
        <AuthModals />
      </ModalContextProvider>
    </React.Fragment>
  );
}

export default Root;

export function tokenLoader() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const now = new Date();
  const storedExpirationDate = new Date(localStorage.getItem('expiration'));

  if (now.getTime() > storedExpirationDate.getTime()) return 'EXPIRED';

  return token;
}
