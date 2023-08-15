import { useState, useContext } from 'react';
import AuthContext from '../store/context/auth-context';

const useHttpRequest = () => {
  const [requestState, setRequestState] = useState({
    isLoading: false,
    error: null,
  });
  const authCtx = useContext(AuthContext);

  const sendRequest = async (
    url,
    method,
    data,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    setRequestState((prevState) => ({
      ...prevState,
      isLoading: true,
      error: null,
    }));

    if (authCtx) {
      const token = localStorage.getItem('token');
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
    }

    try {
      let dataToSend = {};
      if (method === 'GET') {
        dataToSend = {
          method,
          headers,
        };
      } else {
        dataToSend = {
          method,
          body: JSON.stringify(data),
          headers,
        };
      }

      const response = await fetch(url, dataToSend);

      if (!response.ok) {
        const errorData = await response.json();
        setRequestState((prevState) => ({
          ...prevState,
          error: errorData.detail || 'Request failed',
        }));

        throw new Error(errorData.detail);
      } else {
        const responseData = await response.json();

        return responseData;
      }
    } catch (error) {
      setRequestState((prevState) => ({
        ...prevState,
        error: error || 'An error occurred',
      }));

      throw new Error(error);
    } finally {
      setRequestState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  const updateState = (stateData) => {
    setRequestState((prevState) => ({
      ...prevState,
      ...stateData,
    }));
  };

  return { ...requestState, updateState, sendRequest };
};
export default useHttpRequest;
