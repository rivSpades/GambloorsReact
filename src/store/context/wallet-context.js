import React, { useState, createContext, useContext, useEffect } from 'react';
import useHttpRequest from '../../hooks/use-httpRequest';
import AuthContext from './auth-context';
const WalletContext = createContext({
  //we can initialize it with some dummy values
  walletDetails: {}, //variable accessible for every childre component
  refreshWallet: () => {}, //dummy function because we need to pass a function as argument in the provider. This function will be accessible for any children component
});

export default WalletContext;

export const WalletContextProvider = (props) => {
  const [walletDetails, setWalletDetails] = useState(false);
  const { sendRequest, updateState } = useHttpRequest();
  const authCtx = useContext(AuthContext);

  async function refreshWallet() {
    if (!authCtx.isLoggedIn) return;
    if (authCtx.isLoggedIn) {
      try {
        const data = await sendRequest(
          'https://still-frog-f6ef.riverspades336061.workers.dev/api/profile_user/profile/',
          'GET',
          ''
        );
        delete data[0].id;
        setWalletDetails(data[0]);
      } catch (err) {
        updateState({
          error: err.message,
        });
      }
    }
  }

  useEffect(() => {
    refreshWallet();
    // eslint-disable-next-line
  }, [authCtx.isLoggedIn]);
  return (
    <WalletContext.Provider
      value={{
        walletDetails: walletDetails,
        refreshWallet: refreshWallet,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};
