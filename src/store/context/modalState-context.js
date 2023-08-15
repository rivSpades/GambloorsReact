import React, { createContext, useState } from 'react';

const ModalContext = createContext({
  modalsState: {},
  handler: () => {},
});
export default ModalContext;

export const ModalContextProvider = (props) => {
  const [modals, setModals] = useState({
    loginModal: false,
    registerModal: false,
  });

  const toggleModalHandler = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };
  return (
    <ModalContext.Provider value={{ modals, toggleModalHandler }}>
      {props.children}
    </ModalContext.Provider>
  );
};
